import Caver from 'caver-js'
import { ethers } from 'ethers'
import { BigNumber } from '@ethersproject/bignumber'
import { Contract } from '@ethersproject/contracts'
import { abi as IUniswapV2Router02ABI } from '@uniswap/v2-periphery/build/IUniswapV2Router02.json'
import { JSBI, Percent, Router, SwapParameters, Trade, TradeType } from 'definixswap-sdk'
import { useMemo } from 'react'
import { BIPS_BASE, DEFAULT_DEADLINE_FROM_NOW, INITIAL_ALLOWED_SLIPPAGE, ROUTER_ADDRESS } from '../constants'
import { useTransactionAdder } from '../state/transactions/hooks'
import { KlaytnTransactionResponse } from '../state/transactions/actions'
import { calculateGasMargin, getRouterContract, isAddress, shortenAddress } from '../utils'
import isZero from '../utils/isZero'
import { useActiveWeb3React } from './index'
import useENS from './useENS'

const caverFeeDelegate = new Caver(process.env.REACT_APP_SIX_KLAYTN_EN_URL)
const feePayerAddress = process.env.REACT_APP_FEE_PAYER_ADDRESS

// @ts-ignore
const caver = new Caver(window.caver)

 enum SwapCallbackState {
  INVALID,
  LOADING,
  VALID,
}

interface SwapCall {
  contract: Contract
  parameters: SwapParameters
}

interface SuccessfulCall {
  call: SwapCall
  gasEstimate: BigNumber
}

interface FailedCall {
  call: SwapCall
  error: Error
}

type EstimatedSwapCall = SuccessfulCall | FailedCall

/**
 * Returns the swap calls that can be used to make the trade
 * @param trade trade to execute
 * @param allowedSlippage user allowed slippage
 * @param deadline the deadline for the trade
 * @param recipientAddressOrName
 */
function useSwapCallArguments(
  trade: Trade | undefined, // trade to execute, required
  allowedSlippage: number = INITIAL_ALLOWED_SLIPPAGE, // in bips
  deadline: number = DEFAULT_DEADLINE_FROM_NOW, // in seconds from now
  recipientAddressOrName: string | null // the ENS name or address of the recipient of the trade, or null if swap should be returned to sender
): SwapCall[] {
  const { account, chainId, library } = useActiveWeb3React()

  const { address: recipientAddress } = useENS(recipientAddressOrName)
  const recipient = recipientAddressOrName === null ? account : recipientAddress

  return useMemo(() => {
    if (!trade || !recipient || !library || !account || !chainId) return []

    const contract: Contract | null = getRouterContract(chainId, library, account)
    if (!contract) {
      return []
    }

    const swapMethods = []

    swapMethods.push(
      // @ts-ignore
      Router.swapCallParameters(trade, {
        feeOnTransfer: false,
        allowedSlippage: new Percent(JSBI.BigInt(Math.floor(allowedSlippage)), BIPS_BASE),
        recipient,
        ttl: deadline,
      })
    )

    if (trade.tradeType === TradeType.EXACT_INPUT) {
      swapMethods.push(
        // @ts-ignore
        Router.swapCallParameters(trade, {
          feeOnTransfer: true,
          allowedSlippage: new Percent(JSBI.BigInt(Math.floor(allowedSlippage)), BIPS_BASE),
          recipient,
          ttl: deadline,
        })
      )
    }

    return swapMethods.map((parameters) => ({ parameters, contract }))
  }, [account, allowedSlippage, chainId, deadline, library, recipient, trade])
}

// returns a function that will execute a swap, if the parameters are all valid
// and the user has approved the slippage adjusted input amount for the trade
export function useSwapCallback(
  trade: Trade | undefined, // trade to execute, required
  allowedSlippage: number = INITIAL_ALLOWED_SLIPPAGE, // in bips
  deadline: number = DEFAULT_DEADLINE_FROM_NOW, // in seconds from now
  recipientAddressOrName: string | null // the ENS name or address of the recipient of the trade, or null if swap should be returned to sender
): { state: SwapCallbackState; callback: null | (() => Promise<string>); error: string | null } {
  const { account, chainId, library } = useActiveWeb3React()

  const swapCalls = useSwapCallArguments(trade, allowedSlippage, deadline, recipientAddressOrName)

  const addTransaction = useTransactionAdder()

  const { address: recipientAddress } = useENS(recipientAddressOrName)
  const recipient = recipientAddressOrName === null ? account : recipientAddress

  return useMemo(() => {
    if (!trade || !library || !account || !chainId) {
      return { state: SwapCallbackState.INVALID, callback: null, error: 'Missing dependencies' }
    }
    if (!recipient) {
      if (recipientAddressOrName !== null) {
        return { state: SwapCallbackState.INVALID, callback: null, error: 'Invalid recipient' }
      }
      return { state: SwapCallbackState.LOADING, callback: null, error: null }
    }

    return {
      state: SwapCallbackState.VALID,
      callback: async function onSwap(): Promise<string> {
        const estimatedCalls: EstimatedSwapCall[] = await Promise.all(
          swapCalls.map((call) => {
            const {
              parameters: { methodName, args, value },
              contract,
            } = call
            const options = !value || isZero(value) ? {} : { value }

            return contract.estimateGas[methodName](...args, options)
              .then((gasEstimate) => {
                return {
                  call,
                  gasEstimate,
                }
              })
              .catch((gasError) => {
                console.info('Gas estimate failed, trying eth_call to extract error', call)

                return contract.callStatic[methodName](...args, options)
                  .then((result) => {
                    console.info('Unexpected successful call after failed estimate gas', call, gasError, result)
                    return { call, error: new Error('Unexpected issue with estimating the gas. Please try again.') }
                  })
                  .catch((callError) => {
                    console.info('Call threw error', call, callError)
                    let errorMessage: string
                    switch (callError.reason) {
                      case 'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT':
                      case 'UniswapV2Router: EXCESSIVE_INPUT_AMOUNT':
                        errorMessage =
                          'This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.'
                        break
                      default:
                        errorMessage = `The transaction cannot succeed due to error: ${callError.reason}. This is probably an issue with one of the tokens you are swapping.`
                    }
                    return { call, error: new Error(errorMessage) }
                  })
              })
          })
        )

        // a successful estimation is a bignumber gas estimate and the next call is also a bignumber gas estimate
        const successfulEstimation = estimatedCalls.find(
          (el, ix, list): el is SuccessfulCall =>
            'gasEstimate' in el && (ix === list.length - 1 || 'gasEstimate' in list[ix + 1])
        )

        if (!successfulEstimation) {
          const errorCalls = estimatedCalls.filter((call): call is FailedCall => 'error' in call)
          if (errorCalls.length > 0) throw errorCalls[errorCalls.length - 1].error
          throw new Error('Unexpected error. Please contact support: none of the calls threw an error')
        }

        const {
          call: {
            contract,
            parameters: { methodName, args, value },
          },
          gasEstimate,
        } = successfulEstimation

        const iface = new ethers.utils.Interface(IUniswapV2Router02ABI)

        // eslint-disable-next-line consistent-return
        return caver.klay
          .signTransaction({
            type: 'FEE_DELEGATED_SMART_CONTRACT_EXECUTION',
            from: account,
            to: ROUTER_ADDRESS,
            gas: calculateGasMargin(gasEstimate),
            value: value && !isZero(value) ? value : null,
            data: iface.encodeFunctionData(methodName, [...args]),
          })
          .then(function (userSignTx) {
            console.log('userSignTx tx = ', userSignTx)
            const userSigned = caver.transaction.decode(userSignTx.rawTransaction)
            console.log('userSigned tx = ', userSigned)
            userSigned.feePayer = feePayerAddress
            console.log('userSigned After add feePayer tx = ', userSigned)

            return caverFeeDelegate.rpc.klay.signTransactionAsFeePayer(userSigned).then(function (feePayerSigningResult) {
              console.log('feePayerSigningResult tx = ', feePayerSigningResult)
              return caver.rpc.klay.sendRawTransaction(feePayerSigningResult.raw).then((response: KlaytnTransactionResponse) => {
                console.log('swap tx = ', response)
                const inputSymbol = trade.inputAmount.currency.symbol
                const outputSymbol = trade.outputAmount.currency.symbol
                const inputAmount = trade.inputAmount.toSignificant(3)
                const outputAmount = trade.outputAmount.toSignificant(3)
    
                const base = `Swap ${inputAmount} ${inputSymbol} for ${outputAmount} ${outputSymbol}`
                const withRecipient =
                  recipient === account
                    ? base
                    : `${base} to ${
                        recipientAddressOrName && isAddress(recipientAddressOrName)
                          ? shortenAddress(recipientAddressOrName)
                          : recipientAddressOrName
                      }`
    
                addTransaction(response, {
                  type: 'swap',
                  data: {
                    firstToken: inputSymbol,
                    firstTokenAmount: inputAmount,
                    secondToken: outputSymbol,
                    secondTokenAmount: outputAmount,
                  },
                  summary: withRecipient,
                })
    
                return response.transactionHash
              })
              .catch((error: any) => {
                // if the user rejected the tx, pass this along
                if (error?.code === 4001) {
                  throw new Error('Transaction rejected.')
                } else {
                  // otherwise, the error was unexpected and we need to convey that
                  console.error(`Swap failed`, error, methodName, args, value)
                  throw new Error(`Swap failed: ${error.message}`)
                }
              })
            })
          })

        // return contract[methodName](...args, {gasLimit: calculateGasMargin(gasEstimate), ...(value && !isZero(value) ? { value, from: account } : { from: account }),})
        //   .then((response: any) => {
        //     const inputSymbol = trade.inputAmount.currency.symbol
        //     const outputSymbol = trade.outputAmount.currency.symbol
        //     const inputAmount = trade.inputAmount.toSignificant(3)
        //     const outputAmount = trade.outputAmount.toSignificant(3)

        //     const base = `Swap ${inputAmount} ${inputSymbol} for ${outputAmount} ${outputSymbol}`
        //     const withRecipient =
        //       recipient === account
        //         ? base
        //         : `${base} to ${
        //             recipientAddressOrName && isAddress(recipientAddressOrName)
        //               ? shortenAddress(recipientAddressOrName)
        //               : recipientAddressOrName
        //           }`

        //     addTransaction(response, {
        //       type: 'swap',
        //       data: {
        //         firstToken: inputSymbol,
        //         firstTokenAmount: inputAmount,
        //         secondToken: outputSymbol,
        //         secondTokenAmount: outputAmount,
        //       },
        //       summary: withRecipient,
        //     })

        //     return response.hash
        //   })
        //   .catch((error: any) => {
        //     // if the user rejected the tx, pass this along
        //     if (error?.code === 4001) {
        //       throw new Error('Transaction rejected.')
        //     } else {
        //       // otherwise, the error was unexpected and we need to convey that
        //       console.error(`Swap failed`, error, methodName, args, value)
        //       throw new Error(`Swap failed: ${error.message}`)
        //     }
        //   })
      },
      error: null,
    }
  }, [trade, library, account, chainId, recipient, recipientAddressOrName, swapCalls, addTransaction])
}

export default useSwapCallback

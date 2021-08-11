import { Config, JSBI, Percent, Token, WETH } from 'definixswap-sdk'
import sdkconfig from '../sdkConfig'

Config.configure(sdkconfig)

const intMainnetId = parseInt(process.env.REACT_APP_MAINNET_ID || '')
const intTestnetId = parseInt(process.env.REACT_APP_TESTNET_ID || '')

export const ChainId = {
  MAINNET: intMainnetId,
  TESTNET: intTestnetId
}

export const ROUTER_ADDRESS = {
  [intMainnetId]: process.env.REACT_APP_ROUTER_ADDRESS_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_ROUTER_ADDRESS_TESTNET || ''
}

export const DEPARAM_ADDRESS = {
  [intMainnetId]: process.env.REACT_APP_DEPARAM_ADDRESS_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_DEPARAM_ADDRESS_TESTNET || ''
}

export const MULTICALL_ADDRESS = {
  [intMainnetId]: process.env.REACT_APP_MULTICALL_ADDRESS_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_MULTICALL_ADDRESS_TESTNET || ''
}

export const SIX_ADDRESS = {
  [intMainnetId]: process.env.REACT_APP_SIX_ADDRESS_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_SIX_ADDRESS_TESTNET || ''
}

export const FINIX_ADDRESS = {
  [intMainnetId]: process.env.REACT_APP_FINIX_ADDRESS_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_FINIX_ADDRESS_TESTNET || ''
}

export const KSP_ADDRESS = {
  [intMainnetId]: process.env.REACT_APP_KSP_ADDRESS_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_KSP_ADDRESS_TESTNET || ''
}

export const KDAI_ADDRESS = {
  [intMainnetId]: process.env.REACT_APP_KDAI_ADDRESS_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_KDAI_ADDRESS_TESTNET || ''
}

export const KUSDT_ADDRESS = {
  [intMainnetId]: process.env.REACT_APP_KUSDT_ADDRESS_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_KUSDT_ADDRESS_TESTNET || ''
}

export const WKLAY_ADDRESS = {
  [intMainnetId]: process.env.REACT_APP_WKLAY_ADDRESS_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_WKLAY_ADDRESS_TESTNET || ''
}

export const KETH_ADDRESS = {
  [intMainnetId]: process.env.REACT_APP_KETH_ADDRESS_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_KETH_ADDRESS_TESTNET || ''
}

export const KWBTC_ADDRESS = {
  [intMainnetId]: process.env.REACT_APP_KWBTC_ADDRESS_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_KWBTC_ADDRESS_TESTNET || ''
}

export const KXRP_ADDRESS = {
  [intMainnetId]: process.env.REACT_APP_KXRP_ADDRESS_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_KXRP_ADDRESS_TESTNET || ''
}

export const KBNB_ADDRESS = {
  [intMainnetId]: process.env.REACT_APP_KBNB_ADDRESS_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_KBNB_ADDRESS_TESTNET || ''
}

export const allTokens = {
  SIX: SIX_ADDRESS,
  FINIX: FINIX_ADDRESS,
  WKLAY: WKLAY_ADDRESS,
  KUSDT: KUSDT_ADDRESS,
  KDAI: KDAI_ADDRESS,
  KETH: KETH_ADDRESS,
  KWBTC: KWBTC_ADDRESS,
  KXRP: KXRP_ADDRESS,
  KBNB: KBNB_ADDRESS,
  KSP: KSP_ADDRESS,
}





export const FINIX_SIX_LP = {
  [intMainnetId]: process.env.REACT_APP_FINIX_SIX_LP_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_FINIX_SIX_LP_TESTNET || ''
}

export const FINIX_KUSDT_LP = {
  [intMainnetId]: process.env.REACT_APP_FINIX_KUSDT_LP_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_FINIX_KUSDT_LP_TESTNET || ''
}

export const FINIX_KLAY_LP = {
  [intMainnetId]: process.env.REACT_APP_FINIX_KLAY_LP_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_FINIX_KLAY_LP_TESTNET || ''
}

export const FINIX_KSP_LP = {
  [intMainnetId]: process.env.REACT_APP_FINIX_KSP_LP_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_FINIX_KSP_LP_TESTNET || ''
}

export const SIX_KUSDT_LP = {
  [intMainnetId]: process.env.REACT_APP_SIX_KUSDT_LP_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_SIX_KUSDT_LP_TESTNET || ''
}

export const SIX_KLAY_LP = {
  [intMainnetId]: process.env.REACT_APP_SIX_KLAY_LP_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_SIX_KLAY_LP_TESTNET || ''
}

export const KUSDT_KDAI_LP = {
  [intMainnetId]: process.env.REACT_APP_KUSDT_KDAI_LP_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_KUSDT_KDAI_LP_TESTNET || ''
}

export const KLAY_KUSDT_LP = {
  [intMainnetId]: process.env.REACT_APP_KLAY_KUSDT_LP_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_KLAY_KUSDT_LP_TESTNET || ''
}

export const KLAY_KETH_LP = {
  [intMainnetId]: process.env.REACT_APP_KLAY_KETH_LP_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_KLAY_KETH_LP_TESTNET || ''
}

export const KLAY_KWBTC_LP = {
  [intMainnetId]: process.env.REACT_APP_KLAY_KWBTC_LP_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_KLAY_KWBTC_LP_TESTNET || ''
}

export const KLAY_KXRP_LP = {
  [intMainnetId]: process.env.REACT_APP_KLAY_KXRP_LP_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_KLAY_KXRP_LP_TESTNET || ''
}

export const KETH_KUSDT_LP = {
  [intMainnetId]: process.env.REACT_APP_KETH_KUSDT_LP_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_KETH_KUSDT_LP_TESTNET || ''
}

export const KWBTC_KUSDT_LP = {
  [intMainnetId]: process.env.REACT_APP_KWBTC_KUSDT_LP_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_KWBTC_KUSDT_LP_TESTNET || ''
}

export const KXRP_KUSDT_LP = {
  [intMainnetId]: process.env.REACT_APP_KXRP_KUSDT_LP_MAINNET || '',
  [intTestnetId]: process.env.REACT_APP_KXRP_KUSDT_LP_TESTNET || ''
}

export const HERODOTUS_ADDRESS = {
  [intMainnetId]: process.env.REACT_APP_HERODOTUS_MAINNET || '', // ==================
  [intTestnetId]: process.env.REACT_APP_HERODOTUS_TESTNET || ''
}

export const PANCAKE_MASTER_CHEF_ADDRESS = {
  [intMainnetId]: process.env.REACT_APP_PANCAKE_MASTER_CHEF_MAINNET || '', // ==================
  [intTestnetId]: process.env.REACT_APP_PANCAKE_MASTER_CHEF_TESTNET || ''
}

export const DAI = new Token(intMainnetId, '0xf24400CA87E2260FaA63233c2Be8e4259B214E4E', 18, 'KDAI', 'Dai Stablecoin')
// export const BUSD = new Token(intMainnetId, '0xe9e7cea3dedca5984780bafc599bd69add087d56', 18, 'BUSD', 'Binance USD')
export const USDT = new Token(intMainnetId, '0x72f58bF36Ce713D408a854C060FbF89A25F87C4C', 18, 'KUSDT', 'Tether USD')
// export const UST = new Token(
//   intMainnetId,
//   '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
//   18,
//   'UST',
//   'Wrapped UST Token'
// )

const WETH_ONLY = {
  [intMainnetId]: [WETH(intMainnetId)],
  [intTestnetId]: [WETH(intTestnetId)]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST = {
  ...WETH_ONLY,
  [intTestnetId]: [
    new Token(intTestnetId, SIX_ADDRESS[intTestnetId], 18, 'SIX', 'SIX Token'),
    new Token(intTestnetId, FINIX_ADDRESS[intTestnetId], 18, 'FINIX', 'FINIX Token'),
    new Token(intTestnetId, KUSDT_ADDRESS[intTestnetId], 18, 'KUSDT', 'KUSDT Token'),
    new Token(intTestnetId, WKLAY_ADDRESS[intTestnetId], 18, 'WKLAY', 'Wrapped KLAY'),
    new Token(intTestnetId, KUSDT_ADDRESS[intTestnetId], 18, 'KUSDT', 'KUSDT Token'),
    new Token(intTestnetId, KSP_ADDRESS[intTestnetId], 18, 'KSP', 'KLAY Swap Protocol'),
    new Token(intTestnetId, KDAI_ADDRESS[intTestnetId], 18, 'KDAI', 'KDAI Token'),
    new Token(intTestnetId, KETH_ADDRESS[intTestnetId], 18, 'KETH', 'KETH Token'),
    new Token(intTestnetId, KWBTC_ADDRESS[intTestnetId], 18, 'KWBTC', 'KWBTC Token'),
    new Token(intTestnetId, KXRP_ADDRESS[intTestnetId], 18, 'KXRP', 'KXRP Token'),
    new Token(intTestnetId, KBNB_ADDRESS[intTestnetId], 18, 'KBNB', 'KBNB Token')
  ],
  [intMainnetId]: [
    ...WETH_ONLY[intMainnetId],
    DAI,
    USDT,
    new Token(intMainnetId, SIX_ADDRESS[intMainnetId], 18, 'SIX', 'SIX Token'),
    new Token(intMainnetId, FINIX_ADDRESS[intMainnetId], 18, 'FINIX', 'FINIX Token'),
    new Token(intMainnetId, KUSDT_ADDRESS[intMainnetId], 18, 'KUSDT', 'KUSDT Token'),
    new Token(intMainnetId, WKLAY_ADDRESS[intMainnetId], 18, 'WKLAY', 'Wrapped KLAY'),
    new Token(intMainnetId, KUSDT_ADDRESS[intMainnetId], 18, 'KUSDT', 'KUSDT Token'),
    new Token(intMainnetId, KSP_ADDRESS[intMainnetId], 18, 'KSP', 'KLAY Swap Protocol'),
    new Token(intMainnetId, KDAI_ADDRESS[intMainnetId], 18, 'KDAI', 'KDAI Token'),
    new Token(intMainnetId, KWBTC_ADDRESS[intMainnetId], 18, 'KWBTC', 'KWBTC Token'),
    new Token(intMainnetId, KETH_ADDRESS[intMainnetId], 18, 'KETH', 'KETH Token'),
    new Token(intMainnetId, KXRP_ADDRESS[intMainnetId], 18, 'KXRP', 'KXRP Token'),
    new Token(intMainnetId, KBNB_ADDRESS[intMainnetId], 18, 'KBNB', 'KBNB Token')
  ]
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES = {
  [intMainnetId]: {}
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES = {
  ...WETH_ONLY,
  [intMainnetId]: [...WETH_ONLY[intMainnetId], DAI, USDT]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR = {
  ...WETH_ONLY,
  [intMainnetId]: [...WETH_ONLY[intMainnetId], DAI, USDT]
}

export const PINNED_PAIRS = {
  [intMainnetId]: [
    [
      new Token(intTestnetId, SIX_ADDRESS[intMainnetId], 18, 'SIX', 'SIX Token'),
      new Token(intTestnetId, FINIX_ADDRESS[intMainnetId], 18, 'FINIX', 'FINIX Token')
    ],
    [
      new Token(intTestnetId, SIX_ADDRESS[intMainnetId], 18, 'SIX', 'SIX Token'),
      new Token(intTestnetId, KUSDT_ADDRESS[intMainnetId], 18, 'KUSDT', 'KUSDT Token')
    ],
    [
      new Token(intTestnetId, SIX_ADDRESS[intMainnetId], 18, 'SIX', 'SIX Token'),
      new Token(intTestnetId, WKLAY_ADDRESS[intMainnetId], 18, 'WKLAY', 'Wrapped KLAY')
    ],
    [
      new Token(intTestnetId, FINIX_ADDRESS[intMainnetId], 18, 'FINIX', 'FINIX Token'),
      new Token(intTestnetId, KUSDT_ADDRESS[intMainnetId], 18, 'KUSDT', 'KUSDT Token')
    ],
    [
      new Token(intTestnetId, FINIX_ADDRESS[intMainnetId], 18, 'FINIX', 'FINIX Token'),
      new Token(intTestnetId, WKLAY_ADDRESS[intMainnetId], 18, 'WKLAY', 'Wrapped KLAY')
    ],
    [
      new Token(intTestnetId, FINIX_ADDRESS[intMainnetId], 18, 'FINIX', 'FINIX Token'),
      new Token(intTestnetId, KSP_ADDRESS[intMainnetId], 18, 'KSP', 'KLAY Swap Protocol')
    ],
    [
      new Token(intTestnetId, WKLAY_ADDRESS[intMainnetId], 18, 'WKLAY', 'Wrapped KLAY'),
      new Token(intTestnetId, KUSDT_ADDRESS[intMainnetId], 18, 'KUSDT', 'KUSDT Token')
    ],
    [
      new Token(intTestnetId, KDAI_ADDRESS[intMainnetId], 18, 'KDAI', 'KDAI Token'),
      new Token(intTestnetId, KUSDT_ADDRESS[intMainnetId], 18, 'KUSDT', 'KUSDT Token')
    ],
    [
      new Token(intTestnetId, KETH_ADDRESS[intMainnetId], 18, 'KETH', 'KETH Token'),
      new Token(intTestnetId, WKLAY_ADDRESS[intMainnetId], 18, 'WKLAY', 'Wrapped KLAY')
    ],
    [
      new Token(intTestnetId, KWBTC_ADDRESS[intMainnetId], 18, 'KWBTC', 'KWBTC Token'),
      new Token(intTestnetId, WKLAY_ADDRESS[intMainnetId], 18, 'WKLAY', 'Wrapped KLAY')
    ],
    [
      new Token(intTestnetId, KXRP_ADDRESS[intMainnetId], 18, 'KXRP', 'KXRP Token'),
      new Token(intTestnetId, WKLAY_ADDRESS[intMainnetId], 18, 'WKLAY', 'Wrapped KLAY')
    ],
    [
      new Token(intTestnetId, KETH_ADDRESS[intMainnetId], 18, 'KETH', 'KETH Token'),
      new Token(intTestnetId, KUSDT_ADDRESS[intMainnetId], 18, 'KUSDT', 'KUSDT Token')
    ],
    [
      new Token(intTestnetId, KWBTC_ADDRESS[intMainnetId], 18, 'KWBTC', 'KWBTC Token'),
      new Token(intTestnetId, KUSDT_ADDRESS[intMainnetId], 18, 'KUSDT', 'KUSDT Token')
    ],
    [
      new Token(intTestnetId, KXRP_ADDRESS[intMainnetId], 18, 'KXRP', 'KXRP Token'),
      new Token(intTestnetId, KUSDT_ADDRESS[intMainnetId], 18, 'KUSDT', 'KUSDT Token')
    ],
    [
      new Token(intTestnetId, KBNB_ADDRESS[intMainnetId], 18, 'KBNB', 'KBNB Token'),
      new Token(intTestnetId, KUSDT_ADDRESS[intMainnetId], 18, 'KUSDT', 'KUSDT Token')
    ],
    [
      new Token(intTestnetId, KBNB_ADDRESS[intMainnetId], 18, 'KBNB', 'KBNB Token'),
      new Token(intTestnetId, FINIX_ADDRESS[intMainnetId], 18, 'FINIX', 'FINIX Token')
    ]
  ],
  [intTestnetId]: [
    [
      new Token(intTestnetId, SIX_ADDRESS[intTestnetId], 18, 'SIX', 'SIX Token'),
      new Token(intTestnetId, FINIX_ADDRESS[intTestnetId], 18, 'FINIX', 'FINIX Token')
    ],
    [
      new Token(intTestnetId, SIX_ADDRESS[intTestnetId], 18, 'SIX', 'SIX Token'),
      new Token(intTestnetId, KUSDT_ADDRESS[intTestnetId], 18, 'KUSDT', 'KUSDT Token')
    ],
    [
      new Token(intTestnetId, SIX_ADDRESS[intTestnetId], 18, 'SIX', 'SIX Token'),
      new Token(intTestnetId, WKLAY_ADDRESS[intTestnetId], 18, 'WKLAY', 'Wrapped KLAY')
    ],
    [
      new Token(intTestnetId, FINIX_ADDRESS[intTestnetId], 18, 'FINIX', 'FINIX Token'),
      new Token(intTestnetId, KUSDT_ADDRESS[intTestnetId], 18, 'KUSDT', 'KUSDT Token')
    ],
    [
      new Token(intTestnetId, FINIX_ADDRESS[intTestnetId], 18, 'FINIX', 'FINIX Token'),
      new Token(intTestnetId, WKLAY_ADDRESS[intTestnetId], 18, 'WKLAY', 'Wrapped KLAY')
    ],
    [
      new Token(intTestnetId, FINIX_ADDRESS[intTestnetId], 18, 'FINIX', 'FINIX Token'),
      new Token(intTestnetId, KSP_ADDRESS[intTestnetId], 18, 'KSP', 'KLAY Swap Protocol')
    ],
    [
      new Token(intTestnetId, WKLAY_ADDRESS[intTestnetId], 18, 'WKLAY', 'Wrapped KLAY'),
      new Token(intTestnetId, KUSDT_ADDRESS[intTestnetId], 18, 'KUSDT', 'KUSDT Token')
    ],
    [
      new Token(intTestnetId, KDAI_ADDRESS[intTestnetId], 18, 'KDAI', 'KDAI Token'),
      new Token(intTestnetId, KUSDT_ADDRESS[intTestnetId], 18, 'KUSDT', 'KUSDT Token')
    ],
    [
      new Token(intTestnetId, KETH_ADDRESS[intTestnetId], 18, 'KETH', 'KETH Token'),
      new Token(intTestnetId, WKLAY_ADDRESS[intTestnetId], 18, 'WKLAY', 'Wrapped KLAY')
    ],
    [
      new Token(intTestnetId, KWBTC_ADDRESS[intTestnetId], 18, 'KWBTC', 'KWBTC Token'),
      new Token(intTestnetId, WKLAY_ADDRESS[intTestnetId], 18, 'WKLAY', 'Wrapped KLAY')
    ],
    [
      new Token(intTestnetId, KXRP_ADDRESS[intTestnetId], 18, 'KXRP', 'KXRP Token'),
      new Token(intTestnetId, WKLAY_ADDRESS[intTestnetId], 18, 'WKLAY', 'Wrapped KLAY')
    ],
    [
      new Token(intTestnetId, KETH_ADDRESS[intTestnetId], 18, 'KETH', 'KETH Token'),
      new Token(intTestnetId, KUSDT_ADDRESS[intTestnetId], 18, 'KUSDT', 'KUSDT Token')
    ],
    [
      new Token(intTestnetId, KWBTC_ADDRESS[intTestnetId], 18, 'KWBTC', 'KWBTC Token'),
      new Token(intTestnetId, KUSDT_ADDRESS[intTestnetId], 18, 'KUSDT', 'KUSDT Token')
    ],
    [
      new Token(intTestnetId, KXRP_ADDRESS[intTestnetId], 18, 'KXRP', 'KXRP Token'),
      new Token(intTestnetId, KUSDT_ADDRESS[intTestnetId], 18, 'KUSDT', 'KUSDT Token')
    ],
    [
      new Token(intTestnetId, KBNB_ADDRESS[intTestnetId], 18, 'KBNB', 'KBNB Token'),
      new Token(intTestnetId, KUSDT_ADDRESS[intTestnetId], 18, 'KUSDT', 'KUSDT Token')
    ],
    [
      new Token(intTestnetId, KBNB_ADDRESS[intTestnetId], 18, 'KBNB', 'KBNB Token'),
      new Token(intTestnetId, FINIX_ADDRESS[intTestnetId], 18, 'FINIX', 'FINIX Token')
    ]
  ]
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 80
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH

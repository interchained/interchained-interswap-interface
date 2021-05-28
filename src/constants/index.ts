import { ChainId, JSBI, Percent, Token, WETH } from 'definixswap-sdk'

export const ROUTER_ADDRESS = process.env.REACT_APP_ROUTER_ADDRESS

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const multicallAdress = {
  [ChainId.MAINNET]: process.env.REACT_APP_MULTICALL_ADDRESS_MAINNET || "",
  [ChainId.BAOBABTESTNET]: process.env.REACT_APP_MULTICALL_ADDRESS_TESTNET || "",
}

export const SIX_ADDRESS = {
  [ChainId.MAINNET]: process.env.REACT_APP_SIX_ADDRESS_MAINNET || "",
  [ChainId.BAOBABTESTNET]: process.env.REACT_APP_SIX_ADDRESS_TESTNET || "",
}

export const FINIX_ADDRESS = {
  [ChainId.MAINNET]: process.env.REACT_APP_FINIX_ADDRESS_MAINNET || "",
  [ChainId.BAOBABTESTNET]: process.env.REACT_APP_FINIX_ADDRESS_TESTNET || "",
}

export const KDAI_ADDRESS = {
  [ChainId.MAINNET]: process.env.REACT_APP_KDAI_ADDRESS_MAINNET || "",
  [ChainId.BAOBABTESTNET]: process.env.REACT_APP_KDAI_ADDRESS_TESTNET || "",
}

export const KUSDT_ADDRESS = {
  [ChainId.MAINNET]: process.env.REACT_APP_KUSDT_ADDRESS_MAINNET || "",
  [ChainId.BAOBABTESTNET]: process.env.REACT_APP_KUSDT_ADDRESS_TESTNET || "",
}

export const WKLAY_ADDRESS = {
  [ChainId.MAINNET]: process.env.REACT_APP_WKLAY_ADDRESS_MAINNET || "",
  [ChainId.BAOBABTESTNET]: process.env.REACT_APP_WKLAY_ADDRESS_TESTNET || "",
}

export const FINIX_SIX_LP = {
  [ChainId.MAINNET]: process.env.REACT_APP_FINIX_SIX_LP_MAINNET || "",
  [ChainId.BAOBABTESTNET]: process.env.REACT_APP_FINIX_SIX_LP_TESTNET || "",
}

export const FINIX_KUSDT_LP = {
  [ChainId.MAINNET]: process.env.REACT_APP_FINIX_KUSDT_LP_MAINNET || "",
  [ChainId.BAOBABTESTNET]: process.env.REACT_APP_FINIX_KUSDT_LP_TESTNET || "",
}

export const FINIX_KLAY_LP = {
  [ChainId.MAINNET]: process.env.REACT_APP_FINIX_KLAY_LP_MAINNET || "",
  [ChainId.BAOBABTESTNET]: process.env.REACT_APP_FINIX_KLAY_LP_TESTNET || "",
}

export const SIX_KUSDT_LP = {
  [ChainId.MAINNET]: process.env.REACT_APP_SIX_KUSDT_LP_MAINNET || "",
  [ChainId.BAOBABTESTNET]: process.env.REACT_APP_SIX_KUSDT_LP_TESTNET || "",
}

export const KUSDT_KDAI_LP = {
  [ChainId.MAINNET]: process.env.REACT_APP_KUSDT_KDAI_LP_MAINNET || "",
  [ChainId.BAOBABTESTNET]: process.env.REACT_APP_KUSDT_KDAI_LP_TESTNET || "",
}

export const KLAY_KUSDT_LP = {
  [ChainId.MAINNET]: process.env.REACT_APP_KLAY_KUSDT_LP_MAINNET || "",
  [ChainId.BAOBABTESTNET]: process.env.REACT_APP_KLAY_KUSDT_LP_TESTNET || "",
}

export const HERODOTUS_ADDRESS = {
  [ChainId.MAINNET]: process.env.REACT_APP_HERODOTUS_MAINNET || "", // ==================
  [ChainId.BAOBABTESTNET]: process.env.REACT_APP_HERODOTUS_TESTNET || "",
}

export const PANCAKE_MASTER_CHEF_ADDRESS = {
  [ChainId.MAINNET]: process.env.REACT_APP_PANCAKE_MASTER_CHEF_MAINNET || "", // ==================
  [ChainId.BAOBABTESTNET]: process.env.REACT_APP_PANCAKE_MASTER_CHEF_TESTNET || "",
}

export const DAI = new Token(ChainId.MAINNET, '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', 18, 'DAI', 'Dai Stablecoin')
export const BUSD = new Token(ChainId.MAINNET, '0xe9e7cea3dedca5984780bafc599bd69add087d56', 18, 'BUSD', 'Binance USD')
export const USDT = new Token(ChainId.MAINNET, '0x55d398326f99059ff775485246999027b3197955', 18, 'USDT', 'Tether USD')
export const UST = new Token(
  ChainId.MAINNET,
  '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
  18,
  'UST',
  'Wrapped UST Token'
)

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.BAOBABTESTNET]: [WETH[ChainId.BAOBABTESTNET]],
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT, UST],
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, BUSD, USDT],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [
      new Token(ChainId.BAOBABTESTNET, SIX_ADDRESS[ChainId.MAINNET], 18, 'SIX', 'SIX Token'),
      new Token(ChainId.BAOBABTESTNET, FINIX_ADDRESS[ChainId.MAINNET], 18, 'FINIX', 'FINIX Token'),
    ],
    [
      new Token(ChainId.BAOBABTESTNET, SIX_ADDRESS[ChainId.MAINNET], 18, 'SIX', 'SIX Token'),
      new Token(ChainId.BAOBABTESTNET, KUSDT_ADDRESS[ChainId.MAINNET], 18, 'KUSDT', 'USDT Token'),
    ],
    [
      new Token(ChainId.BAOBABTESTNET, SIX_ADDRESS[ChainId.MAINNET], 18, 'SIX', 'SIX Token'),
      new Token(ChainId.BAOBABTESTNET, WKLAY_ADDRESS[ChainId.MAINNET], 18, 'WKLAY', 'Wrapped KLAY'),
    ],
    [
      new Token(ChainId.BAOBABTESTNET, FINIX_ADDRESS[ChainId.MAINNET], 18, 'FINIX', 'FINIX Token'),
      new Token(ChainId.BAOBABTESTNET, KUSDT_ADDRESS[ChainId.MAINNET], 18, 'KUSDT', 'USDT Token'),
    ],
    [
      new Token(ChainId.BAOBABTESTNET, FINIX_ADDRESS[ChainId.MAINNET], 18, 'FINIX', 'FINIX Token'),
      new Token(ChainId.BAOBABTESTNET, WKLAY_ADDRESS[ChainId.MAINNET], 18, 'WKLAY', 'Wrapped KLAY'),
    ],
    [
      new Token(ChainId.BAOBABTESTNET, WKLAY_ADDRESS[ChainId.MAINNET], 18, 'WKLAY', 'Wrapped KLAY'),
      new Token(ChainId.BAOBABTESTNET, KUSDT_ADDRESS[ChainId.MAINNET], 18, 'KUSDT', 'USDT Token'),
    ],
    [
      new Token(ChainId.BAOBABTESTNET, KDAI_ADDRESS[ChainId.MAINNET], 18, 'KDAI', 'DAI Token'),
      new Token(ChainId.BAOBABTESTNET, KUSDT_ADDRESS[ChainId.MAINNET], 18, 'KUSDT', 'USDT Token'),
    ],
  ],
  [ChainId.BAOBABTESTNET]: [
    [
      new Token(ChainId.BAOBABTESTNET, SIX_ADDRESS[ChainId.BAOBABTESTNET], 18, 'SIX', 'SIX Token'),
      new Token(ChainId.BAOBABTESTNET, FINIX_ADDRESS[ChainId.BAOBABTESTNET], 18, 'FINIX', 'FINIX Token'),
    ],
    [
      new Token(ChainId.BAOBABTESTNET, SIX_ADDRESS[ChainId.BAOBABTESTNET], 18, 'SIX', 'SIX Token'),
      new Token(ChainId.BAOBABTESTNET, KUSDT_ADDRESS[ChainId.BAOBABTESTNET], 18, 'KUSDT', 'USDT Token'),
    ],
    [
      new Token(ChainId.BAOBABTESTNET, SIX_ADDRESS[ChainId.BAOBABTESTNET], 18, 'SIX', 'SIX Token'),
      new Token(ChainId.BAOBABTESTNET, WKLAY_ADDRESS[ChainId.BAOBABTESTNET], 18, 'WKLAY', 'Wrapped KLAY'),
    ],
    [
      new Token(ChainId.BAOBABTESTNET, FINIX_ADDRESS[ChainId.BAOBABTESTNET], 18, 'FINIX', 'FINIX Token'),
      new Token(ChainId.BAOBABTESTNET, KUSDT_ADDRESS[ChainId.BAOBABTESTNET], 18, 'KUSDT', 'USDT Token'),
    ],
    [
      new Token(ChainId.BAOBABTESTNET, FINIX_ADDRESS[ChainId.BAOBABTESTNET], 18, 'FINIX', 'FINIX Token'),
      new Token(ChainId.BAOBABTESTNET, WKLAY_ADDRESS[ChainId.BAOBABTESTNET], 18, 'WKLAY', 'Wrapped KLAY'),
    ],
    [
      new Token(ChainId.BAOBABTESTNET, WKLAY_ADDRESS[ChainId.BAOBABTESTNET], 18, 'WKLAY', 'Wrapped KLAY'),
      new Token(ChainId.BAOBABTESTNET, KUSDT_ADDRESS[ChainId.BAOBABTESTNET], 18, 'KUSDT', 'USDT Token'),
    ],
    [
      new Token(ChainId.BAOBABTESTNET, KDAI_ADDRESS[ChainId.BAOBABTESTNET], 18, 'KDAI', 'BUSD BNB'),
      new Token(ChainId.BAOBABTESTNET, KUSDT_ADDRESS[ChainId.BAOBABTESTNET], 18, 'KUSDT', 'USDT Token'),
    ],
  ],
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

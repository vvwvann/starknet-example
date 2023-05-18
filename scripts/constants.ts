import { BigNumber } from "ethers"

export const BIG_1E18 = BigNumber.from("1000000000000000000")
export const BIG_1E6 = BigNumber.from(1e6)
export const BIG_1E8 = BigNumber.from(1e8)

export const deployNames: any = {
  FACTORY: "Factory",
  DEFOREX: "Deforex",
  EXCHANGE: "Exchange",
  UNISWAP_EXCHANGE: "UniswapExchange",
  CURVE_EXCHANGE: "CurveExchange",
  EXTRA_PROTOCOL: "ExtraProtocol",
  AAVE_PROTOCOL: "AaveProtocol",
  ADDRESS_RESOLVER: "AddressResolver",
  INSURANCE_FUND: "InsuranceFund",
  LIQUIDATION_KEEPER: "LiquidationKeeper",
  CREDIT_KEEPER: "CreditKeeper",
  LINK_KEEPER: "LinkKeeper"
}

export const SWAP_ROUTER_ADDRESSES = {
  420: "0xC0aa7fda88644f4394663CDb00e531477053D018",
  80001: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
} as any

export const AAVE_POOL_ADDRESSES = {
  420: "0x4b529A5d8268d74B687aC3dbb00e1b85bF4BF0d4",
  80001: "0x1758d4e6f68166C4B2d9d0F049F33dEB399Daa1F",
} as any

export const KEEPER_REGISTRY = {
  420: "0xE16Df59B887e3Caa439E0b29B42bA2e7976FD8b2",
  80001: "0xE16Df59B887e3Caa439E0b29B42bA2e7976FD8b2",
} as any

export const QUOTER_V2_ADDRESSES = {
  420: "0x20298aEf0F920340544680B39e52152998D8f485",
  80001: "0x61fFE014bA17989E743c5F6cB21bF9697530B21e",
} as any

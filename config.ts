import { createPublicClient, createWalletClient, defineChain, http, type Chain, type Hex } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { sepolia, optimismSepolia, celoAlfajores, holesky } from 'viem/chains'
import { publicActionsL2, walletActionsL1, publicActionsL1, walletActionsL2 } from 'viem/op-stack'

import {chainConfig} from "viem/op-stack"
 
export const account = privateKeyToAccount(Bun.env.PRIVATE_KEY as Hex)

const sourceId = holesky.id

const dango = defineChain({
  ...celoAlfajores,
  rpcUrls: {
    default: {
      http: ['https://forno.dango.celo-testnet.org'],
    },
  },
  name: "Dango",
  contracts: {
    ...celoAlfajores.contracts,
    ...chainConfig.contracts,
    portal: {
      [sourceId]: {
        address: "0x969d247cB586C0bF02212B9ae6e690e8b0d762bA"
      },
    },
    disputeGameFactory: {
      [sourceId]: {
        address: '0xB0C46509E24a0745d201114016fD666D6D1E3f8e',
      },
    },
    l2OutputOracle: {
      [sourceId]: {
        address: '0x58eeeEC56C6e92b1898367fa7372ab3f6483F054',
      },
    },
    l1StandardBridge: {
      [sourceId]: {
        address: '0x65E8f629B13535f902020668Fe73aEc24e52F5D8',
      },
    },
    l2StandardBridge: {
      [sourceId]: {
        address: '0x4200000000000000000000000000000000000010',
      },
    },
    
  }
})

const isCelo = false

export const l1Chain = isCelo ? holesky : sepolia
export const l2Chain = isCelo ? dango : optimismSepolia


export const walletClientL1 = createWalletClient({
    account,
    chain: l1Chain,
    transport: http()
}).extend(walletActionsL1())

export const walletClientL2 = createWalletClient({
  account,
  chain: l2Chain,
  transport: http()
}).extend(walletActionsL2())

export const publicClientL1 = createPublicClient({
  chain: l1Chain,
  transport: http()
}).extend(publicActionsL1())

export const publicClientL2 = createPublicClient({
  chain: l2Chain,
  transport: http()
}).extend(publicActionsL2())
 

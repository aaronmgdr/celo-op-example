import { createPublicClient, createWalletClient, defineChain, http, type Chain, type Hex } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { sepolia, optimismSepolia, celoAlfajores, holesky } from 'viem/chains'
import { publicActionsL2, walletActionsL1, publicActionsL1, walletActionsL2 } from 'viem/op-stack'
 
export const account = privateKeyToAccount(Bun.env.PRIVATE_KEY as Hex)

const sourceId = holesky.id

const dango = defineChain({
  ...celoAlfajores,
  rpcUrls: {
    default: {
      http: ['https://dango-forno.celo-testnet.org'],
    },
  },
  contracts: {
    ...celoAlfajores.contracts,
    portal: {
      [sourceId]: {
        address: "0xB29597c6866c6C2870348f1035335B75eEf79d07"
      },
    },
    disputeGameFactory: {
      [sourceId]: {
        address: '0x831f39053688f05698ad0fB5f4DE7e56B2949c55',
      },
    },
    l2OutputOracle: {
      [sourceId]: {
        address: '0x419577592C884868C3ed85B97169b93362581855',
      },
    },
    l1StandardBridge: {
      [sourceId]: {
        address: '0x9FEBd0F16b97e0AEF9151AF07106d733E87B1be4',
      },
    },
    l2StandardBridge: {
      [sourceId]: {
        address: '0x4200000000000000000000000000000000000010',
      },
    },
  }
})

const useCelo = false

export const l1Chain = useCelo ? holesky : sepolia
export const l2Chain = useCelo ? dango : optimismSepolia


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
 

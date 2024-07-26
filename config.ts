import { createPublicClient, createWalletClient, http, type Hex } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { sepolia, optimismSepolia, celoAlfajores } from 'viem/chains'
import { publicActionsL2, walletActionsL1, publicActionsL1, walletActionsL2 } from 'viem/op-stack'
 

export const account = privateKeyToAccount(Bun.env.PRIVATE_KEY as Hex)


const dango = {
  ...celoAlfajores,
  rpcUrls: {
    default: {
      http: ['https://dango-forno.celo-testnet.org'],
    },
  },
}

// export const publicClientL1Dango = createPublicClient({
//   chain: dango,
//   transport: http()
// }).extend(publicActionsL1())


export const walletClientL1 = createWalletClient({
    account,
    chain: sepolia,
    transport: http()
}).extend(walletActionsL1())

export const walletClientL2 = createWalletClient({
  account,
  chain: optimismSepolia,
  transport: http()
}).extend(walletActionsL2())

export const publicClientL1 = createPublicClient({
  chain: sepolia,
  transport: http()
}).extend(publicActionsL1())

export const publicClientL2 = createPublicClient({
  chain: optimismSepolia,
  transport: http()
}).extend(publicActionsL2())
 

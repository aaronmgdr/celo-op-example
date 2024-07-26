import { createPublicClient, createWalletClient, http, type Hex } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { sepolia, optimismSepolia } from 'viem/chains'
import { publicActionsL2, walletActionsL1 } from 'viem/op-stack'
 

export const account = privateKeyToAccount(Bun.env.PRIVATE_KEY as Hex)


export const walletClientL1 = createWalletClient({
    account,
    chain: sepolia,
    transport: http()
}).extend(walletActionsL1())
 
export const publicClientL2 = createPublicClient({
  chain: optimismSepolia,
  transport: http()
}).extend(publicActionsL2())
 

// Local Account

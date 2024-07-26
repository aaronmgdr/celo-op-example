
import { parseEther } from 'viem'
import { getTransactionReceipt } from 'viem/actions'
import { getWithdrawals } from 'viem/op-stack'
import { account, publicClientL2, walletClientL1 } from './config'

// buildDepositTransaction
export async function buildDepositTransaction() {    
    const l2DepositTransaction = await publicClientL2.buildDepositTransaction({
        account,
        mint: parseEther('0.001'), 
        to: '0xad5DC090223b3f6b9a47C354B808FF593FfA1e25', 
    })
    
    
    console.log("L2 Deposit transaction: ", l2DepositTransaction);

    return l2DepositTransaction
}

export async function buildProveWithdrawal() {
    const receipt = await getTransactionReceipt(publicClientL2, {
        hash: '0xbbdd0957a82a057a76b5f093de251635ac4ddc6e2d0c4aa7fbf82d73e4e11039',
      })
       
      const [withdrawal] = getWithdrawals(receipt)
      // TODO why is this not available?
      const output = await walletClientL1.getL2Output({
        l2BlockNumber: receipt.blockNumber,
        targetChain: publicClientL2.chain,
      })
       
      const args = await publicClientL2.buildProveWithdrawal({ 
        account, 
        output, 
        withdrawal, 
      }) 
       
      const hash = await walletClientL1.proveWithdrawal(args)    
}
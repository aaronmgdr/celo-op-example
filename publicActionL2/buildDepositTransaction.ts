import { parseEther } from 'viem'
import { getTransactionReceipt } from 'viem/actions'
import { getWithdrawals } from 'viem/op-stack'
import { account, publicClientL2, walletClientL1 } from '../config'


export async function buildDepositTransaction() {    
    const l2DepositTransaction = await publicClientL2.buildDepositTransaction({
        account,
        mint: parseEther('0.001'), 
        to: '0xad5DC090223b3f6b9a47C354B808FF593FfA1e25', 
    })
    
    
    console.log("L2 Deposit transaction: ", l2DepositTransaction);

    return l2DepositTransaction
}
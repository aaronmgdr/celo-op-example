import { parseEther } from 'viem'
import { account, publicClientL2 } from '../config'


export async function buildDepositTransaction() {    
    const l2DepositTransaction = await publicClientL2.buildDepositTransaction({
        account,
        gas: 23000n,
        mint: parseEther('0.001'), 
        to: account.address, 
    })
    
    console.log("L2 Deposit transaction: ", l2DepositTransaction);

    return l2DepositTransaction
}
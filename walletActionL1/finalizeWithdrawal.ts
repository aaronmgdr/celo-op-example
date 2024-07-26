import { getTransactionReceipt } from 'viem/actions'
import { account, publicClientL2, walletClientL1 } from '../config'
import { getWithdrawals } from 'viem/op-stack'

// must way for the contestation period to end. 7 days on sepolia. 
export async function finalizeWithdrawal() {
    // 0x1b1352423a9fc7add2527613f0a3b74ad6be7b49589a5af5bf6fa68c207f5c67 is the initiateWithdrawal hash (just in case)
    const transactionReceiptforWithDrawal = "0x1b1352423a9fc7add2527613f0a3b74ad6be7b49589a5af5bf6fa68c207f5c67"
    const receipt = await getTransactionReceipt(publicClientL2, {
        // TODO is it initiate withdrawal or proof hash?
        hash: transactionReceiptforWithDrawal, 
    })

    console.info('got transaciton reciept... fetching withdrawals')


    const [withdrawal] = getWithdrawals(receipt)

    console.info('withdrawl', withdrawal.withdrawalHash)

    const hash = await walletClientL1.finalizeWithdrawal({ 
        account, 
        targetChain: publicClientL2.chain, 
        withdrawal, 
    }) 
    console.log('finalized', hash)
    return hash
}

await finalizeWithdrawal();
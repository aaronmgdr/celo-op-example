import { getWithdrawals, type GetWithdrawalsParameters } from "viem/op-stack"
import { l2Chain, publicClientL1 } from "../config"



export async function waitToFinalize(receipt: GetWithdrawalsParameters) {

    const [message] = getWithdrawals(receipt)
    
    await publicClientL1.waitToFinalize({ 
    withdrawalHash: message.withdrawalHash, 
    targetChain: l2Chain 
    }) 

    console.info('waiting over')
}
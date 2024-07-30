import { getWithdrawals, type GetWithdrawalsParameters } from "viem/op-stack"
import { l2Chain, publicClientL1 } from "../config"



export async function getTimeToFinalize(withDrawalReciept: GetWithdrawalsParameters) {

    const [message] = getWithdrawals(withDrawalReciept)
    
    const {
    period, 
    seconds, 
    timestamp, 
  } = await publicClientL1.getTimeToFinalize({ 
    withdrawalHash: message.withdrawalHash, 
    targetChain: l2Chain 
  })

  console.info(`Time to Finalize Remaining ${seconds} seconds `, timestamp)

  return {period, seconds, timestamp}

}
import type { Hash } from "viem"
import { l2Chain, publicClientL1, publicClientL2 } from "../config"



export async function getWithdrawalStatus(hash: Hash ) {

    const receipt = await publicClientL2.getTransactionReceipt({
        hash
      })
    
    const status = await publicClientL1.getWithdrawalStatus({ 
        receipt, 
        targetChain: l2Chain, 
      }) 
    
      console.info("withdrawal status", status)
      return status
}


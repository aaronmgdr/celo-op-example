import type { Hash } from "viem"
import { l2Chain, publicClientL1, publicClientL2 } from "../config"

// wrapper on getTimeToNextL2Output / getTimeToNextGame
export async function getTimeToProve(txHash: Hash) {

    const receipt = await publicClientL2.getTransactionReceipt({
        hash: txHash
      })

    const { 
        interval, 
        seconds, 
        timestamp
      } = await publicClientL1.getTimeToProve({ 
        receipt, 
        targetChain: l2Chain, 
      }) 

    return { 
        interval, 
        seconds, 
        timestamp
    }  
}
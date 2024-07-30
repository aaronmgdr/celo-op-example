import type { Hash } from "viem"
import { l2Chain, publicClientL1, publicClientL2 } from "../config"


export async function waitToProve(hash: Hash) {

    const receipt = await publicClientL2.getTransactionReceipt({
        hash,
      })

    const output = await publicClientL1.waitToProve({ 
        receipt, 
        targetChain: l2Chain 
      }) 

    console.info('wait to prove output', output)
      
    return output  
}
import { l2Chain, publicClientL1 } from "../config";



// This Action will be deprecated in the future.
export async function getL2Output(blockNumber: bigint) {

    const output = await publicClientL1.getL2Output({ 
        l2BlockNumber: blockNumber, 
        targetChain: l2Chain, 
    }) 
    return output
}


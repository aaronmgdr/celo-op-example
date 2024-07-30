
import { publicClientL1, publicClientL2 } from '../config'

export async function getTimeToNextL2Output() {
    const l2BlockNumber = await publicClientL2.getBlockNumber()
 
    const { 
        interval, 
        seconds, 
        timestamp
    } = await publicClientL1.getTimeToNextL2Output({ 
        l2BlockNumber, 
        targetChain: publicClientL2.chain, 
    }) 

    return  {
        interval, 
        seconds, 
        timestamp
    }
}
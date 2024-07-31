import { l2Chain } from '../config'
import { publicClientL1 } from '../config'


export async function getGame(block: bigint) {
 
    const game = await publicClientL1.getGame({ 
    l2BlockNumber: block, 
    targetChain: l2Chain, 
    }) 
    return game
}
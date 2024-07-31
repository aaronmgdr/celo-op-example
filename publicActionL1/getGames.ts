import { l2Chain } from '../config'
import { publicClientL1 } from '../config'


export async function getGames() {
 
    const games = await publicClientL1.getGames({ 
        targetChain: l2Chain, 
    }) 
    return games
}
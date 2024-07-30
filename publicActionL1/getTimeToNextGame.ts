import { l2Chain, publicClientL1, publicClientL2 } from "../config"


export async function getTimeToNextGame() {

  const l2BlockNumber = await publicClientL2.getBlockNumber()
 
  const { 
    interval, 
    seconds, 
    timestamp
  } = await publicClientL1.getTimeToNextGame({ 
    l2BlockNumber, 
    targetChain: l2Chain, 
  }) 

  return {interval, seconds, timestamp}

}
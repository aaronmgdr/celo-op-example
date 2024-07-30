import { account, publicClientL1, l2Chain,  } from '../config'


export async function estimateProveWithdrawalGas() {

 const output = await publicClientL1.getL2Output({
    l2BlockNumber: receipt.blockNumber,
    targetChain: l2Chain,
  })

  
  // TODO learn what these args all are. what is the l2outputindex for example?
    // @ts-expect-error seems to error because the type expects chain id to be exactly sepholia?


    const gas = await publicClientL1.estimateProveWithdrawalGas({ 
      account: account.address, 
      l2OutputIndex: output.outputIndex, 
      targetChain: l2Chain, 
      withdrawalProof: [ ... ], 
      withdrawal: { ... }, 
    }) 
    console.log("prove withdrawl gas estimation for l1", gas)

    return gas
}
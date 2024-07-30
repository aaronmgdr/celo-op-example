import { account, publicClientL1, l2Chain, l1Chain } from '../config'

type Withdrawal = Parameters<typeof publicClientL1.estimateFinalizeWithdrawalGas>['0']

export async function estimateFinalizeWithdrawalGas(withdrawal: Withdrawal["withdrawal"]) {

    // @ts-expect-error seems to error because the type expects chain id to be exactly sepholia?
    const gas = await publicClientL1.estimateFinalizeWithdrawalGas({ 
        account: account.address, 
        targetChain: l2Chain,  // in example this is optimism but semantically am i not targeting the l1? 
        chain: l1Chain,
        withdrawal, 
      }) 
    console.log("final withdrawl gas estimation for l1", gas)

    return gas
}
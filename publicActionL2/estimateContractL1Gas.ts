import { account, publicClientL2 } from '../config'
import { wagmiAbi } from './wagmi-abi';

// expected to fail as celo does not have L1 fee
// is above true for estimateContractL1Gas as well?

export const estimateContractL1Gas = async () => {
    console.log('Estimating L1 gas for contract call')

    const l1Gas = await publicClientL2.estimateContractL1Gas({
        address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
        abi: wagmiAbi,
        functionName: 'mint',
        account,
      })

    console.log("L1 gas estimate: ", l1Gas);
    return l1Gas
}
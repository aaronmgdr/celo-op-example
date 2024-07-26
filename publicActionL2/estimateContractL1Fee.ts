import { account, publicClientL2 } from '../config'
import { wagmiAbi } from './wagmi-abi';

// expected to fail as celo does not have L1 fee

export const estimateContractL1Fee = async () => {
    console.log('Estimating L1 fee for contract call')

    const l1Fee = await publicClientL2.estimateContractL1Fee({
        address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
        abi: wagmiAbi,
        functionName: 'mint',
        account,
      })

    console.log("L1 fee estimate: ", l1Fee);
}

// bun ./publicActionL2/estimateContractL1Fee.ts
await estimateContractL1Fee();

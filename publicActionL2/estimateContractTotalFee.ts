import { account, publicClientL2 } from '../config'
import { wagmiAbi } from './wagmi-abi';

// expected to fail as celo does not have L1 fee
// is above true for estimateContractL1Gas as well?

export const estimateContractTotalFee = async () => {
    console.log("Estimating total fee for contract call");

    const l1Fee = await publicClientL2.estimateContractTotalFee({
        address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
        abi: wagmiAbi,
        functionName: 'mint',
        account,
      })

    console.log("Total fee estimate: ", l1Fee);
}

// bun ./publicActionL2/estimateContractTotalFee.ts
await estimateContractTotalFee();

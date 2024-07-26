import { account, publicClientL2 } from '../config'
import { wagmiAbi } from './wagmi-abi';

// expected to fail as celo does not have L1 fee
// is above true for estimateContractL1Gas as well?

export const estimateContractTotalGas = async () => {
    console.log("Estimating total gas for contract call");

    const l1Gas = await publicClientL2.estimateContractTotalGas({
        address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
        abi: wagmiAbi,
        functionName: 'mint',
        account,
      })

    console.log("Total gas estimate: ", l1Gas);
}

// bun ./publicActionL2/estimateContractTotalGas.ts
await estimateContractTotalGas();

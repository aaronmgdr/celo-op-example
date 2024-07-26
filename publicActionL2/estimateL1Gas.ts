import { account, publicClientL2 } from '../config'
import { wagmiAbi } from './wagmi-abi';
import { parseEther } from 'viem'

// expected to fail as celo does not have L1 fee
// is above true for estimateContractL1Gas as well?

export const estimateL1Gas = async () => {
    console.log('Estimating L1 gas for a transaction')

    const l1Gas = await publicClientL2.estimateL1Gas({
      account,
      to: '0xad5DC090223b3f6b9a47C354B808FF593FfA1e25',
      value: parseEther('000.1'),
    })

    console.log("L1 gas estimate: ", l1Gas);
}

// bun ./publicActionL2/estimateL1Gas.ts
await estimateL1Gas();

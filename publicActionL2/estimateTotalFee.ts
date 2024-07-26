import { account, publicClientL2 } from '../config'
import { wagmiAbi } from './wagmi-abi';
import { parseEther } from 'viem'

export const estimateTotalFee = async () => {
    console.log('Estimating total fee for a transaction')

    const totalFee = await publicClientL2.estimateTotalFee({
      account,
      to: '0xad5DC090223b3f6b9a47C354B808FF593FfA1e25',
      value: parseEther('000.1'),
    })

    console.log("Total fee estimate: ", totalFee);
}

// bun ./publicActionL2/estimateTotalFee.ts
await estimateTotalFee();

import { account, publicClientL2 } from '../config'
import { parseEther } from 'viem'

// expected to fail as celo does not have L1 fee

export const estimateL1Fee = async () => {
    console.log('Estimating L1 fee for a transaction')

    const l1Fee = await publicClientL2.estimateL1Fee({
      account,
      to: '0xad5DC090223b3f6b9a47C354B808FF593FfA1e25',
      value: parseEther('000.1'),
    })

    console.log("L1 fee estimate: ", l1Fee);
    return l1Fee
}

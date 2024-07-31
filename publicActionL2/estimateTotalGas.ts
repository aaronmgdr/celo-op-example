import { account, publicClientL2 } from '../config'
import { parseEther } from 'viem'

export const estimateTotalGas = async () => {
    console.log('Estimating total gas for a transaction')

    const totalGas = await publicClientL2.estimateTotalGas({
      account,
      to: '0xad5DC090223b3f6b9a47C354B808FF593FfA1e25',
      value: parseEther('000.1'),
    })

    console.log("Total gas estimate: ", totalGas);
    return  totalGas
}

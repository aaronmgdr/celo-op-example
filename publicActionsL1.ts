
import { parseEther } from 'viem'
import { account, publicClientL1 } from './config'
import { optimismSepolia } from 'viem/chains'


export default async function () {
    console.info('estimation...')
    const gas = await publicClientL1.estimateDepositTransactionGas({
        account,
        request: {
          gas: 21_000n,
          mint: parseEther('0.001'),
          to: '0xad5DC090223b3f6b9a47C354B808FF593FfA1e25',
        },
        targetChain: optimismSepolia,
      })
      
      console.info("gas", gas)

}
 

import { account, publicClientL2 } from '../config'
import { parseEther } from 'viem'
 

export async function estimateInitiateWithdrawalGas() {
  console.info("estimateInitiateWithdrawalGas")
  const gas = await publicClientL2.estimateInitiateWithdrawalGas({
    account,
    request: {
      gas: 21_000n,
      to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
      value: parseEther('0.0001')
    },
  })
  console.info('estimated gas to initiate', gas)
  return gas
}
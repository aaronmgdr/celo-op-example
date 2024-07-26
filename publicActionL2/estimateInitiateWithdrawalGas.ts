import { base } from 'viem/chains'
import { account, publicClientL2, walletClientL2 } from '../config'
import { parseEther } from 'viem'
 

export async function estimateInitiateWithdrawalGas() {

  const gas = await publicClientL2.estimateInitiateWithdrawalGas({
    account,
    request: {
      gas: 21_000n,
      to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
      value: parseEther('0.0001')
    },
  })
}


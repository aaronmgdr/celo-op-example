import { parseEther } from 'viem'
import { account, publicClientL1, l2Chain } from '../config'



export async function estimateDepositTransactionGas() {

    // @ts-expect-error seems to error because the type expects chain id to be exactly sepholia?
    const gas = await publicClientL1.estimateDepositTransactionGas({
        account,
        request: {
            gas: 21_000n,
            mint: parseEther('000.1'),
            to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
        },
        targetChain: l2Chain,
    })

    console.log("deposit gas estimation for l1", gas)

    return gas
}
import { parseEther } from 'viem'
import { account, publicClientL1, l2Chain } from '../config'



export async function estimateDepositTransactionGas() {

    // @ts-expect-error seems to error because the type expects chain id to be exactly sepholia?
    const gas = await publicClientL1.estimateDepositTransactionGas({
        account,
        request: {
            gas: 21_000n,
            mint: parseEther('0.0000001'),
            to: account.address,
        },
        targetChain: l2Chain,
    })

    console.log("deposit gas estimation for l1", gas)

    return gas
}
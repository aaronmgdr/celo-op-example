import { walletClientL1 } from '../config'
 import type {buildDepositTransaction} from "../publicActionsL2"

export async function depositTransaction(args: Awaited<ReturnType<typeof buildDepositTransaction>>) {

    console.info('run deposit')

    const hash = await walletClientL1.depositTransaction(args)
    console.info('depositTransaction Hash', hash)

    return hash
}


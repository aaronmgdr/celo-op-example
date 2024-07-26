import { walletClientL1 } from '../config'
 


import {buildDepositTransaction} from "../publicActionsL2"

export async function depositTransaction() {

    const args = await buildDepositTransaction()
    console.info('run deposit')

    const hash = await walletClientL1.depositTransaction(args)
    console.info('depositTransaction Hash', hash)
}
 
depositTransaction()
// Initiate the deposit transaction on the L1.

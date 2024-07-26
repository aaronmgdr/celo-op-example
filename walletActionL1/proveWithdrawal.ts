import { walletClientL1 } from "../config";
import { buildProveWithdrawal } from "../publicActionL2/buildProveWithdrawal";

export async function proveWithdrawal() {

    const args = await buildProveWithdrawal()

    const hash = await walletClientL1.proveWithdrawal(args) 


    console.info("withdrawal proof hash", hash)

    return hash
} 

await proveWithdrawal()
import { walletClientL1 } from "../config";

export async function proveWithdrawal(preparedProof: Parameters<typeof walletClientL1.proveWithdrawal>[0]) {
    const hash = await walletClientL1.proveWithdrawal(preparedProof) 

    console.info("withdrawal proof hash", hash)

    return hash
} 
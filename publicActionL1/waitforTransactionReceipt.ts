import { publicClientL1 } from "../config";

import type { Hash } from "viem";

export async function waitForTransactionReciept(hash: Hash) {
    console.info('waiting for transactionReceipt')
    return publicClientL1.waitForTransactionReceipt({hash})
}
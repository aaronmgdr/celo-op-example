import { getL2TransactionHashes } from "viem/op-stack";
import { waitForTransactionReciept } from "../publicActionL1/waitforTransactionReceipt";
import { buildDepositTransaction } from "../publicActionL2/buildDepositTransaction";
import { depositTransaction } from "../walletActionL1/depositTransaction";
import { publicClientL2 } from "../config";

const depositTx = await buildDepositTransaction()

const depositHash = await  depositTransaction(depositTx)

const reciept = await waitForTransactionReciept(depositHash)

// Get the L2 transaction hash from the L1 transaction receipt.
const [l2Hash] = getL2TransactionHashes(reciept)

console.info("l2Hash", l2Hash)
 
// Wait for the L2 transaction to be processed.
const l2Receipt = await publicClientL2.waitForTransactionReceipt({ 
  hash: l2Hash 
})

console.info("l2Reciept", l2Receipt)

console.info("success!")
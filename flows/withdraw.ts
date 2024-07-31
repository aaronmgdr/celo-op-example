import { buildInitiateWithdrawal } from "../publicActionL1/buildInitiateWithdrawal"
import { buildProveWithdrawal } from "../publicActionL2/buildProveWithdrawal"
import { proveWithdrawal } from "../walletActionL1/proveWithdrawal"
import { initiateWithdrawal } from "../walletActionL2/initiateWithdrawal"
import { publicClientL1, publicClientL2 } from "../config"
import { waitToProve } from "../publicActionL1/waitToProve"
import { getTimeToFinalize } from "../publicActionL1/getTimeToFinalize"
import { waitToFinalize } from "../publicActionL1/waitToFinalize"
import { finalizeWithdrawal } from "../walletActionL1/finalizeWithdrawal"

// https://viem.sh/op-stack/guides/withdrawals

// Initiation

const args = await buildInitiateWithdrawal()

const initiatedHash = await initiateWithdrawal(args)

const receipt = await publicClientL2.waitForTransactionReceipt({ hash: initiatedHash })

console.info("waitForTransactionReceipt", receipt)

console.info("this takes a while... why not get some fresh air?")

const {output, withdrawal } = await waitToProve(initiatedHash)

console.info('waited', withdrawal, output)

// Proving

const preparedProof = await buildProveWithdrawal(initiatedHash)

const provedWithdrawalHash = await proveWithdrawal(preparedProof)

console.info('provedWithdrawal', provedWithdrawalHash)

// Finalizing

const timeToWait = await getTimeToFinalize(receipt)

console.info('will finalize in', timeToWait.seconds, "seconds")


await waitToFinalize(receipt)

const finalizeHash = await finalizeWithdrawal(withdrawal.withdrawalHash)

console.info('finalizedHash', finalizeHash)

const finalizeReceipt = await publicClientL1.waitForTransactionReceipt({
    hash: finalizeHash
  })

  console.info('finalizeReceipt', finalizeReceipt)



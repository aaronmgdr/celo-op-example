import { walletClientL2 } from '../config'
import type { buildInitiateWithdrawal } from '../publicActionL1/buildInitiateWithdrawal';

export const initiateWithdrawal = async (args: Awaited<ReturnType<typeof buildInitiateWithdrawal>>) => {
  
    console.log('Initiating withdrawal...');

    const hash = await walletClientL2.initiateWithdrawal(args);

    console.log('Withdrawal initiated with hash: ', hash);

    return hash
}
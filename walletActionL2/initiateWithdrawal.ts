import { base } from 'viem/chains'
import { account, walletClientL2 } from '../config'

export const initiateWithdrawal = async () => {
    console.log('Initiating withdrawal...');

    const hash = await walletClientL2.initiateWithdrawal({
        account,
        request: {
          gas: 21_000n,
          to: '0xad5DC090223b3f6b9a47C354B808FF593FfA1e25',
          value: 1n
        },
      });

    console.log('Withdrawal initiated with hash: ', hash);
}

await initiateWithdrawal();

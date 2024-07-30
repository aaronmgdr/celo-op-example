import { account, publicClientL1 } from '../config'
import { parseEther } from 'viem'

// TODO result needs to be passed to walletClientL2.initiateWithdrawal(args)
// as per https://viem.sh/op-stack/actions/buildInitiateWithdrawal
export const buildInitiateWithdrawal = async () => {
    const args = await publicClientL1.buildInitiateWithdrawal({ 
        account,
        to: '0xad5DC090223b3f6b9a47C354B808FF593FfA1e25', 
        value: parseEther('0.001'), 
    })
    console.info('builtInitiateWithdrawal', args)
    return args
}

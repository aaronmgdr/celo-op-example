import { account, publicClientL1 } from '../config'
import { parseEther } from 'viem'

// TODO result needs to be passed to walletClientL2.initiateWithdrawal(args)
// as per https://viem.sh/op-stack/actions/buildInitiateWithdrawal
export const buildInitiateWithdrawal = async () => {
    const args = await publicClientL1.buildInitiateWithdrawal({ 
        account,
        to: account.address, 
        value: parseEther('0.00001'), 
    })
    console.info('builtInitiateWithdrawal', args)
    return args
}

import { parseEther, type Hash } from 'viem'
import { getTransactionReceipt } from 'viem/actions'
import { getWithdrawals } from 'viem/op-stack'
import { account, publicClientL1, publicClientL2, walletClientL1 } from '../config'

// TODO don't hardcode the hash, add it as a param
export async function buildProveWithdrawal(hashFromInitiate: Hash) {
    console.log('Getting transaction receipt...')
    const receipt = await getTransactionReceipt(publicClientL2, {
        // hash is from output of initiateWithdrawal
        hash: hashFromInitiate,
    })

    console.log('Getting withdrawal...')
       
      const [withdrawal] = getWithdrawals(receipt)


      console.log('Getting output...')

      const output = await publicClientL1.getL2Output({
        l2BlockNumber: receipt.blockNumber,
        targetChain: publicClientL2.chain,
      })

      console.log('Building proof of withdrawal...')
       
      const args = await publicClientL2.buildProveWithdrawal({ 
        account, 
        output, 
        withdrawal, 
      }) 
       
      return args
}
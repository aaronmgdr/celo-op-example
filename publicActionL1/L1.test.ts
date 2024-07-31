import { expect, test, describe } from "bun:test";
import { buildInitiateWithdrawal } from "./buildInitiateWithdrawal";
import { estimateDepositTransactionGas } from "./estimateDepositTransactionGas";
// import { estimateProveWithdrawalGas } from "./estimateProveWithdrawalGas";
import { getGame } from "./getGame";
import { l2Chain, publicClientL1 } from "../config";
import { getGames } from "./getGames";
import { getL2Output } from "./getL2output";
// import { getTimeToFinalize } from "./getTimeToFinalize";
import { getTimeToNextGame } from "./getTimeToNextGame";
import { getTimeToNextL2Output } from "./getTimeToNextL2Output";
// import { getTimeToProve } from "./getTimeToProve";

describe('publicActionL1', () => {

    test("buildInitiateWithdrawal", () =>{
        expect(buildInitiateWithdrawal()).resolves.toBeObject()
    })

    test.if(l2Chain.name === 'Dango')("estimateDepositTransactionGas", () =>{
        expect(estimateDepositTransactionGas()).rejects.toThrowError('Execution reverted for an unknown reason.')
    })
    test.if(l2Chain.name === 'OP Sepolia')("estimateDepositTransactionGas", () =>{
        expect(estimateDepositTransactionGas()).resolves.toBeTypeOf('bigint')
    })

    test.skip("estimateProveWithdrawalGas", () =>{
        // expect(estimateProveWithdrawalGas()).resolves.toBeTypeOf('bigint')
    })

    test.if(l2Chain.name === 'Dango')("getGame", async () => {
        const number = await publicClientL1.getBlockNumber()
        expect(getGame(number - 100n)).rejects.toThrowError('Dispute game not found')
    })
    test.if(l2Chain.name === 'OP Sepolia')("getGame", async () => {
        const number = await publicClientL1.getBlockNumber()
        expect(getGame(number - 100n)).resolves.toMatchObject({
            extraData: expect.any(String),
            index: expect.any(BigInt),
            l2BlockNumber:expect.any(BigInt),
            metadata:  expect.any(String),
            rootClaim:  expect.any(String),
            timestamp:expect.any(BigInt),
        })
    })

    test("getGames", async () =>{
        expect(getGames()).resolves.toBeArray()
    })


    test.if(l2Chain.name === 'OP Sepolia')("getL2Output", async () =>{
        const number = await publicClientL1.getBlockNumber()
        expect(getL2Output(number)).resolves.toMatchObject({
              l2BlockNumber:expect.any(BigInt),
              outputIndex: expect.any(BigInt),
              outputRoot: expect.any(String),
              timestamp: expect.any(BigInt),
        })
    })

    test.if(l2Chain.name === 'Dango')("getL2Output", async () =>{
        const number = await publicClientL1.getBlockNumber()
        expect(getL2Output(number)).rejects.toThrowError('Dispute game not found')
    })

    test.skip("getTimeToFinalize",  () =>{
        // expect(getTimeToFinalize()).resolves.toBeObject()
    })

    test.if(l2Chain.name === 'OP Sepolia')("getTimeToNextGame", async () =>{
        expect(getTimeToNextGame()).resolves.toMatchObject({
            seconds: expect.any(Number),
            interval:  expect.any(Number),
            timestamp: expect.any(Number),
        })
    })

    test.if(l2Chain.name === 'Dango')("getTimeToNextGame", async () =>{
        expect(getTimeToNextGame()).rejects.toThrow()
    })


    test.if(l2Chain.name === 'OP Sepolia')("getTimeToNextL2Output", async () =>{
        expect(getTimeToNextL2Output()).resolves.toMatchObject({
            seconds: expect.any(Number),
            interval:  expect.any(Number),
            timestamp: expect.any(Number),
        })
    })
    test.if(l2Chain.name === 'Dango')("getTimeToNextL2Output", async () =>{
        expect(getTimeToNextL2Output()).rejects.toThrowError(`The contract function "latestOutputIndex" reverted`)
    })

    test.skip("getTimeToProve", async () =>{
        // expect(getTimeToProve()).resolves.toHaveProperty("seconds")
    })

})
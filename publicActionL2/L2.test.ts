import { expect, test, describe } from "bun:test";
import { estimateInitiateWithdrawalGas } from "./estimateInitiateWithdrawalGas";
import { estimateContractL1Gas } from "./estimateContractL1Gas";
import { buildDepositTransaction } from "./buildDepositTransaction";
import { estimateContractL1Fee } from "./estimateContractL1Fee";
import { estimateL1Fee } from "./estimateL1Fee";
import { estimateL1Gas } from "./estimateL1Gas";
import { estimateTotalGas } from "./estimateTotalGas";
import { estimateTotalFee } from "./estimateTotalFee";
import { estimateContractTotalFee } from "./estimateContractTotalFee";
import { estimateContractTotalGas } from "./estimateContractTotalGas";
// import { buildProveWithdrawal } from "./buildProveWithdrawal";

// test for independent actions ie they can be run without setup. 
describe('publicActionL2', () => {

test('buildDepositTransaction', () => {
    expect(buildDepositTransaction()).resolves.toBeDefined()
})


test('estimateInitiateWithdrawalGas', async () => {
    expect(estimateInitiateWithdrawalGas()).resolves.toBeTypeOf('bigint')
})

test("estimateContractL1Gas", () => {
    expect(estimateContractL1Gas()).resolves.toBeTypeOf('bigint')
})


test("estimateContractL1Fee", () => {
    expect(estimateContractL1Fee()).resolves.toBeTypeOf('bigint')
})

test("estimateContractTotalGas", () => {
    expect(estimateContractTotalGas()).resolves.toBeTypeOf('bigint')
})


test("estimateContractTotalFee", () => {
    expect(estimateContractTotalFee()).resolves.toBeTypeOf('bigint')
})


test("estimateL1Fee", () => {
    expect(estimateL1Fee()).resolves.toBeTypeOf('bigint')
})


test("estimateL1Gas", () => {
    expect(estimateL1Gas()).resolves.toBeTypeOf('bigint')
})

test("estimateTotalGas", () => {
    expect(estimateTotalGas()).resolves.toBeTypeOf('bigint')
})

test("estimateTotalFee", () => {
    expect(estimateTotalFee()).resolves.toBeTypeOf('bigint')
})
})
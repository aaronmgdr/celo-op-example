// TODO for celo we could use one of the @celo/abis ABIs
export const wagmiAbi = [
    {
        inputs: [],
        name: "mint",
        outputs: [{ name: "", type: "uint32" }],
        stateMutability: "view",
        type: "function",
    },
] as const;

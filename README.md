# Guide to using the viem op-stack extension with celo


Showing which extensions work with celo and which do not.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```


## structure


### Grouped Actions. 

* publicActionL1 

* publicActionsL2

* walletActionsL1

* walletActionsL2


* flows -- actions work together to achieve a desired outcome.


## What works and what doesnt

* In General depositing and withdrawing flows work. In general actions related to L1 gas do not as celo does not use the L1 for DA.
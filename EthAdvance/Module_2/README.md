# Insurance Policy Dapp

This full-stack code utilizes Solidity to establish an insurance provider protocol. It enables users to supply liquidity to cover damages in case of insured events, earning interest for their contributions.
<br>
The insurance protocol focuses on two primary components: <br>
i) Insuring crypto wallets
ii) Providing collateral protection for crypto-backed loans

## Description

The project involves developing two smart contracts: `WalletInsurance.sol` and `LoanCollateralInsurance.sol`, managed by `InsuranceFactory.sol`. `WalletInsurance.sol` provides protection for smart contract wallet owners against hackers, with users paying a monthly insurance amount set by the protocol. `LoanCollateralInsurance.sol` offers insurance for loan collateral, returning a percentage of the loan if the collateral value drops. Both contracts can be created dynamically using `InsuranceFactory.sol`. Users can initiate transactions and operations within these contracts, paying exact premiums as specified by each policy. In case of a hacker attack, users are eligible to claim their insurance premium.

## Getting Started

### Executing program

1. Start [Remix IDE](https://remix.ethereum.org/) in browser.
2. Upload the `Contracts Folder`.
3. Setup the Metamask Wallet and Eths with [Sepolia Faucet](https://faucets.chain.link/sepolia)
4. Great! now Compile and Deploy the code.
5. Replace the `ABI` and `Contract Address` for each contract file.
6. From VS code run the `index.html` using Live Server.
7. Now You can interact with th UI Frontend thorugh Metamask.

## Help

1. Check your `solidity version` Carefully and Select the compatible version only.
2. Metamask Wallet must have `sufficient Eth` for the transactions.

## Authors

Ayush Kansal
[@Aykansal](https://linkedin.com/aykansal)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

# Token Stakes in an Organisation

This fullstack code is made for an organization register and to create a vesting schedule for their tokens. Depending on the tokenomics model of a web3 organization

## Description

### Key Features
1. <b>Stakeholder Management:</b> The contract uses an enum to define four types of stakeholders: community members, investors, pre-sale buyers, and founders. Each stakeholder is represented by a struct that holds their metadata.
2. <b>Vesting Schedule Management:</b> The contract maps vesting schedules to time periods and addresses to stakeholder types. This allows for flexible management of token vesting and distribution.
3. <b>Owner-Only Functions:</b> The contract includes four owner-only functions: setVestingSchedule, addMember, whiteListingMem, and claimToken. These functions enable the owner to manage the vesting schedule, add new members, whitelist stakeholders, and facilitate token claims.
4. <b>Token Claiming:</b> The claimToken function transfers tokens to stakeholders when all criteria are met. This ensures that tokens are distributed fairly and securely.
5.<b/> Utility Functions:</b> The contract includes two utility functions: getTime and getTokens. These functions return the stakeholder's time and token balance, respectively.
6. <b>Logging and Events:</b> The contract uses events for logging purposes, providing a transparent and auditable record of all transactions and interactions.

### Front end part

`index.html` and `styles.css` is used to create and design the structure and look of the front end and app.js is used for the logic purpose. In js file we have contract address, abi. Using this with ethers.js we get create the provider, signer and contract. then `connectWallet()` is used to connect the wallet. and rest all the functions are connected with the solidity functions.

## Getting Started

### Executing program

1. Start [Remix IDE](https://remix.ethereum.org/) on Browser.
2. Create Filename.sol.
3. Copy the Code and paste in that File.
4. Great! Now compile and Deploy the code.
5. Replace the ABI and Contract Address.
6. Now You can interact with th UI Frontend thorugh Metamask.
   <br> You are good to go!

## Help

Check your solidity version Carefully and Select the compatible version only.

## Authors

Ayush Kansal
[@Aykansal](https://linkedin.com/aykansal)


## License

This project is licensed under the MIT License - see the LICENSE.md file for details



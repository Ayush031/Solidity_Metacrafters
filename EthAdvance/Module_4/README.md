# wallet Smart contract

This fullstack code is made with the help of Solidity and designed a smart contract wallet for users using account abstraction. A simple wallet Factory contract is built which would create a smart contract wallet (not an EOA) at the backend and perform simple wallet operations like transfer of crypto from one wallet to another, fetching the wallet balances etc.

## Description

`EIP4337.sol` is for UserOperation, `Wallet.sol` file is contract that will be deployed on runtime using `WalletFactory.sol`.
In this project new wallet will be created for the user without the private key (EOA) at the backend. and user can perfrom the transaction and operations with this. we have few functions to test the contract. `connect wallet` to get the own wallet address, `create wallet` to create a new wallet from the contract. `get wallet address` to get the address of created wallet. `checkBalance, trasnferfunds` to check and transfer the funds and `Execute operation` to perform the user operations at the backend, here in this case we are doing `nonce++`.

### Executing program

1. Start [Remix IDE](https://remix.ethereum.org/) on Browser.
2. Create Filename.sol.
3. Copy the Code and paste in that File.
4. Great! Now compile and Deploy the code.
5. Replace the ABI and Contract Address.
6. Now You can interact with th UI Frontend thorugh Metamask.
   <br> You are good to go!

WARNING- nonce function is critical here, in backend after every user operation , nonce will increase by 1, so match the same with the app.js file. if the nonce dont match the it will give error. This will commomly happen if called the execute operation once and refresing the webpage. In that case you will have to manually set the nonce in app.js

## Authors

Ayush Kansal
[@Aykansal](https://linkedin.com/aykansal)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

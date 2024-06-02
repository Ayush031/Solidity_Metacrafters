# Arithmetic Counter DAPP
Eth Intermediate Module 2 Project

## Description

This is a simple decentralized application (DApp) built using Solidity and Ethereum smart contracts that provides two functionalities:

1. Increment a counter stored on the blockchain.
2. Perform an arithmetic addition operation with two numbers and retrieve the result.
3. Fetch the Wallet Address.
4. Fetch the Updated Wallet Balance on each transaction.

The DApp utilizes MetaMask as the wallet provider and Ethers.js for interacting with the Ethereum blockchain and smart contracts.

### Smart Contract Details

The Solidity contract, Counter.sol, contains the following functions:

* incrementCounter()    : Increments the counter stored on the blockchain
* arithmeticFunction()  : Performs an addition operation with two numbers and stores the result
* getArithmeticResult() : Retrieves the result of the addition operation
* getCounter()          : Retrieves the current value of the counter

## Installing

* Install MetaMask browser extension
* Node.js and npm installed

### Executing program

1. Start [Remix IDE](https://remix.ethereum.org/) on Browser.
2. Create Filename.sol .
3. Copy the Code and paste in that File.
4. Now compile and Deploy the code.
5. Copy the ABI and Contract Address.
6. Paste them in the index.js file in respective given variables.
7. Launch the HTML page keeping both index.html and index.js in the SAME directory.

<br><br>You are good to go!!

## Help - Validate the following 
* The Solidity Compiler Version and match with the deployment compiler to run smart contract succesfully.
* Your Contract Address and ABI in Index.js must be updated .
* Your Wallet must have required Ethers to process the transaction

[Chainlink Sepolia Faucet](https://faucets.chain.link/sepolia) : Get Sepolia Test Ethers

## Authors

Ayush Kansal  
[@Aykansal](https://linkedin.com/aykansal)


## License

This project is licensed under the MIT License - see the LICENSE.md file for details
# Create, Mint or Transfer Token

## Description

This Solidity smart contract, named MyToken, represents a basic implementation of a cryptocurrency token on the Ethereum blockchain. The contract allows for token minting, burning, and transferring.

The key features of this contract include:

* **Token Properties**: It defines properties such as owner, tokenName, tokenSymbol, and totalSupply to manage the token's characteristics.
* **Token Balances**: The contract maintains a mapping of token balances for each address using the balances mapping.
* **Modifiers**: The onlyOwner modifier ensures that certain functions can only be executed by the contract owner.
* **Token Minting**: The mint function allows the contract owner to create new tokens and assign them to a specified address.
* **Token Burning**: The burn function enables token holders to destroy a specified amount of tokens, reducing the total supply.
* **Token Transfer**: The transfer function allows token holders to send tokens from their address to another address, provided they have a sufficient balance.

Overall, this contract provides a basic framework for managing and transacting with a custom ERC20-like token on the Ethereum blockchain.

### Executing program
1. Start [Remix IDE](https://remix.ethereum.org/) on Browser.
2. Create Filename.sol .
3. Copy the Code and paste in that File.
4. Now compile and Deploy the code.

You are good to go!!

## Help

* Validate that the Solidity Compiler Version and match with the deployment compiler to run smart contract succesfully.
* Verify the Syntax, while facing any error and refer offical documentation.

## Authors

Ayush Kansal  
[@Aykansal](https://linkedin.com/aykansal)


## License

This project is licensed under the MIT License - see the LICENSE.md file for details

# Hierarchical Message System for an Organization

This fullstack code is made for the proper message communtication between different bodies of an organisation, here in this code university is taken as example, here HOD can send message to faculities , faculity to Hods, faculity to faculities and Hod to Hods.

## Description

### Smart-Contract Section

This contract is written in Solidity language, a programming language used for developing smart contracts on the Ethereum blockchain. In smart contract first we have `enum Designation` which will tell the designation of the members. `members` is a state variable to store the designation of members. `addMember()` adds a member with its designation. `upMessage()` can only called by faculities to send message to hod and `downMessage()` can be called by hod only to send message to faculities. `horizontalMessage()` can be called by both but to send message to the same level no hierarchical level. `deleteMember()` will delete the existing member.

### Frontend Section

`index.html` and `styles.css` is used to create and design the structure and look of the front end and script.js is used for the logic purpose. In js file we have contract address, abi. Using this with ethers.js we get create the provider, signer and contract. then `connect()` is used to connect the wallet. and rest all the functions are connected with the solidity functions. `checkMember()` is used to get the designation of the member from blockchain and `getDesignationName()` provides the name of the designation for its integer value.

## Getting Started

### Executing program

To run this program, First create a directory , switch to that directory and open it in vs code.

1) Run `npm i`, this will install the dependencies.
2) Run Remix IDE on browser and paste the given code.
3) Now compile and deploy the contract.
4) Copy the ABI and contract Address
5) Navigate to `src\script.js` file and paste respective values in `abi` and `contractAddress` variables.
6) Now open index.html.
7) click connect wallet

Now you can interact with UI add/remove member as hod/faculity, send messages. And at last can check the designation of member in integer form (in dev console) by providing its address.

## Authors

Ayush Kansal  
[@Aykansal](https://linkedin.com/aykansal)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;
contract MyToken {

    // public variables to store token details
    string public tokenName = "Aykan";
    string public tokenSymbol = "AK";
    uint public totalSupply=100;
    
    // mapping of addresses to balances
    mapping(address => uint) public balances;

    // mint function to create new tokens
    function mineToken(address walletAddress, uint amount) public {
        totalSupply += amount;
        balances[walletAddress] += amount;
    }
    
    // burn function to destroy tokens
    function burnTokenBal(address walletAddress, uint amount) public returns (bool) {
        if (balances[walletAddress] >= amount) {
            totalSupply -= amount;
            balances[walletAddress] -= amount;            
            return true;
        }
        else {
            return false;
        }
    }
}

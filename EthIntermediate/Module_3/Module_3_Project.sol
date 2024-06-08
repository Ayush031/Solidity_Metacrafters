// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract MyToken {
    address public owner;
    string public tokenName;
    string public tokenSymbol;
    uint256 public totalSupply;

    mapping(address => uint256) public balances;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
        tokenName = "Ayush";
        tokenSymbol = "aK";
        totalSupply = 0;
    }

   function mint(address _address, uint256 _value) public onlyOwner{
        totalSupply += _value; 
        balances[_address] += _value;
    }


   function burn(address _address, uint256 _value) public {
        if (balances[_address] >= _value) {
            totalSupply -= _value; 
            balances[_address] -= _value;
        }
    }

   function transfer( address _from,address _to,uint256 value) public {
        if (balances[_from] >= value) {

            balances[_from] -= value;
            balances[_to] += value;
        }
    }
}

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Counter {
    uint256 public count=0;
    uint256 public sum;

    function incrementCounter() public {
        count++;
    }

    function arithmeticFunction(uint a, uint b) public {
        sum = a + b;
    }

    function getArithmeticResult() public view returns (uint256) {
        return sum;
    }

    function getCounter() public view returns (uint256) {
        return count;
    }
}

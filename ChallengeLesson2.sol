// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract ChallengeLesson2 {
    
    event EtherReceived(address sender, uint amountInWei);

    receive() external payable {
        emit EtherReceived(msg.sender, msg.value);
    }

    function getValueInWei() public view returns (uint) {
        return address(this).balance;
    }

    function getValueInEther() public view returns (uint) {
        return address(this).balance / 1 ether;
    }

    function getValueInGwei() public view returns (uint) {
        return address(this).balance / 1 gwei;
    }

    function getAllValues() public view returns (uint valueInWei, uint valueInEther, uint valueInGwei) {
        uint balance = address(this).balance;
        valueInWei = balance;
        valueInEther = balance / 1 ether;
        valueInGwei = balance / 1 gwei;
    }
}

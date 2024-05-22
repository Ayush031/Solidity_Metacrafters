// SPDX-License-Identifier: GPL-3.0

//smart contract functions to transact the Voting Details of a User 

pragma solidity ^0.8.2;

contract SimpleContract {
    string public name;
    uint256 public age;
    bool public voteEligibility;
    string public nativeCity;

    function setAge(uint256 _age) public {
        age = _age;
    }

    function setName(string memory _name) public {
        name = _name;
    }

    function setEligibility(bool _value) public {
        voteEligibility = _value;
    }

    function setCity(string memory _city) public {
        nativeCity = _city;
    }

    function getName() private view returns (string memory) {
        return name;
    }

    function getAge() private view returns (uint256) {
        return age;
    }

    function getEligibility() private view returns (bool) {
        return voteEligibility;
    }

    function getCity() private view returns (string memory) {
        return nativeCity;
    }
}

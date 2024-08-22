// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleMessage {
    string private message;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function setMessage(string memory newMessage) public {
        require(msg.sender == owner, "Only the owner can set the message");
        message = newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function getOwner() public view returns (address) {
        return owner;
    }
}

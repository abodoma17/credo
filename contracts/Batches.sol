// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.4.22 <0.9.0;

contract Batches {
    //Owner of the invoker of the contract
    address public owner = msg.sender;
    
    //Struct (object) batch contains batchNumber and owner's address
    struct Batch {
        uint256 batchNumber;
        address ownerAddress;
    }

    //Array of batches that has dynamic size
    Batch[] public batches;

    //Creates batch, adds to array of batches -> address taken from above
    function _createBatch(uint256 _batchNumber) public {
        batches.push(Batch(_batchNumber, msg.sender));
    }
}
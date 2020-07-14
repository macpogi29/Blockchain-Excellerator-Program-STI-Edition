pragma solidity ^0.5.0;

import '../../node_modules/@openzeppelin/contracts/math/SafeMath.sol';

contract DonationContract{
    using SafeMath for uint;
    
    address payable artist;
    
    constructor() public {
        artist = msg.sender;
    }
    
    mapping(address => uint) public tips;
    address[] supporters;
    
    function tip() public payable {
        bool oldSupporter = false;
        for(uint i = 0; i < supporters.length; i++){
            if(supporters[i] == msg.sender){
                oldSupporter = true;
                break;
            }
        }
        if(!oldSupporter){
            supporters.push(msg.sender);
        }
        tips[msg.sender] = tips[msg.sender].add(msg.value);
        artist.transfer(msg.value);
    }
    
    
}
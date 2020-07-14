pragma solidity ^0.5.0;

contract MusikaContract{
    string public test;
    uint256 public musikaCount = 0;
    
    mapping(uint256 => Musika) public musikas;
    
    struct Musika{
        uint256 musikaId;
        string title;
        uint256 price;
        string genre;
        string description;
        string coverPhoto;
        address payable owner;
        uint256 timeUploaded;
        bool isSold;
    }
    
    constructor() public{
        test = "test";
    }
    
    event MusikaUploaded(
        uint256 musikaId,
        string title,
        uint256 price,
        string genre,
        string description,
        string coverPhoto,
        address payable owner,
        uint256 timeUploaded,
        bool isSold
    );
    
    event MusikaPurchased(
        uint256 musikaId,
        string title,
        uint256 price,
        string genre,
        string description,
        string coverPhoto,
        address payable owner,
        uint256 timeUploaded,
        bool isSold
    );
    
    function uploadMusika(string memory _title, uint256 _price, string memory _genre, string memory _description, string memory _coverPhoto) public {
        require(bytes(_title).length > 0, "Title must not be empty");
        require(_price > 0, "Price must have value that greater than 0");
        musikaCount++;
        musikas[musikaCount] = Musika(musikaCount, _title, _price, _genre, _description, _coverPhoto, msg.sender, now, false);
        emit MusikaUploaded(musikaCount, _title, _price, _genre, _description, _coverPhoto, msg.sender, now, false);
    }
    
    function viewSelectedMusikaDetails(uint256 _musikaId) public view returns(string memory, uint256, string memory, string memory,  uint256, bool, address){
        return (musikas[_musikaId].title, musikas[_musikaId].price, musikas[_musikaId].genre, musikas[_musikaId].description, musikas[_musikaId].timeUploaded, musikas[_musikaId].isSold, musikas[_musikaId].owner);
    }
    
    function puchaseMusika(uint256 _musikaId) public payable{
        Musika memory _musika = musikas[_musikaId];
        address payable _artistSeller = _musika.owner;
        _musika.owner = msg.sender;
        _musika.isSold = true;
        musikas[_musikaId] = _musika;
        _artistSeller.transfer(msg.value);
        emit MusikaUploaded(_musikaId, _musika.title, _musika.price, _musika.genre, _musika.description, _musika.coverPhoto, msg.sender, now, true);
        
    }
    
    
}

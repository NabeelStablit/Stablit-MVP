pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenDeployer {
    address public sETHAddress;
    address public zETHAddress;

    mapping(address => uint256) public tokenPrices; // store prices for deployed tokens

    constructor() public {
        sETHAddress = address(new ModifiedERC20("Token1", "T1", this));
        zETHAddress = address(new ModifiedERC20("Token2", "T2", this));
    }

    function setTokenPrice(address tokenAddress, uint256 newPrice) public {
        require(msg.sender == address(this), "Only TokenDeployer can set price");
        tokenPrices[tokenAddress] = newPrice;
    }

    function mintToken(address tokenAddress, uint256 amount) public payable {
        require(msg.value >= tokenPrices[tokenAddress] * amount, "Insufficient funds");
        ModifiedERC20(tokenAddress).mint(msg.sender, amount);
        // send excess funds back to user, if any
        payable(msg.sender).transfer(msg.value - tokenPrices[tokenAddress] * amount);
    }

    function getAndSetPrices() public {
        // fetch prices 
        // set prices using setTokenPrice
    }
}

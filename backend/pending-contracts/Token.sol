pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ModifiedERC20 is ERC20 {
    address public deployer;

    constructor(string memory name, string memory symbol, address deployerAddress) ERC20(name, symbol) {
        deployer = deployerAddress;
    }

    function mint(address recipient, uint256 amount) public {
        require(msg.sender == deployer, "Only deployer can mint");
        _mint(recipient, amount);
    }
}

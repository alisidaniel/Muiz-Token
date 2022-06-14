//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MelodyToken is ERC20 {
    address public admin;

    constructor() ERC20("Melody Coin", "MelodyToken") {
        _mint(msg.sender, 1000 * 10**18);
        admin = msg.sender;
    }

    function mint(address to, uint256 amount) public {
        require(msg.sender == admin, "Only admin");
        _mint(to, amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}

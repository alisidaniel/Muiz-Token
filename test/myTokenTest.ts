import { expect } from "chai";
import { ethers } from "hardhat";

let owner: any;
let contract: any;
let addr1: any;
let addr2: any;

const token = "Aliwave";
const symbol = "ALW";
const decimals = 18;
const totalSupply = "1000000000000000000000";
const amount = 1000;

describe("MyToken Contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    const TokenContract = await ethers.getContractFactory("MyToken");
    contract = await TokenContract.deploy(token, symbol, decimals, totalSupply);
    await contract.deployed();

    const ownerBalance = await contract.balanceOf(owner.address);

    expect(await contract.totalSupply()).to.equal(ownerBalance);
    expect(await contract.name()).to.equal(token);
    expect(await contract.symbol()).to.equal(symbol);
    expect(await contract.decimals()).to.equal(decimals);
  });

  it("It should transfer token to address and not throw error", async function () {
    await contract.transfer(addr2.address, amount);
    const currentBalance = await contract.balanceOf(addr2.address);
    expect(+currentBalance.toString()).to.equal(amount);
  });
});

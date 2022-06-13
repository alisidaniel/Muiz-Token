import { expect } from "chai";
import { ethers } from "hardhat";

describe("MyToken Contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner, addr1, addr2] = await ethers.getSigners();
    const MyToken = await ethers.getContractFactory("MelodyToken");
    const myToken = await MyToken
      .deploy
      //   "Aliwave",
      //   "ALW",
      //   "18",
      //   "100000000000000000000000"
      ();
    await myToken.deployed();

    const ownerBalance = await myToken.balanceOf(owner.address);

    expect(await myToken.totalSupply()).to.equal(ownerBalance);
  });
});

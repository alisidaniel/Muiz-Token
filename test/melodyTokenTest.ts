import { expect } from "chai";
import { ethers } from "hardhat";

describe("MelodyToken Contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner, addr1] = await ethers.getSigners();
    const MelodyToken = await ethers.getContractFactory("MelodyToken");
    const melodyToken = await MelodyToken.deploy();
    await melodyToken.deployed();

    const ownerBalance = await melodyToken.balanceOf(owner.address);

    expect(await melodyToken.totalSupply()).to.equal(ownerBalance);

    const resTx = await melodyToken.mint(owner.address, 100);
    expect(await resTx.from).to.eql(owner.address);
  });
});

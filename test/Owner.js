const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");
const signers = {};
let contractFactory;
let contractInstance;
let contractAddr;

describe("Owner", function () {
  describe("Deploy", function () {
    it("Should deploy the smart contract", async function () {
      const [defaultSigner] = await ethers.getSigners();

      signers.defaultSigner = defaultSigner;

      contractFactory = await ethers.getContractFactory(
        "ownerContract",
        defaultSigner
      );
      contractInstance = await contractFactory.deploy();
      await contractInstance.deployed();
      contractAddr = contractInstance.address;
    });

    describe("Only owner", function () {
      it("Should only can be asked by owner", async function () {
        const [firstUser] = await ethers.getSigners();
        signers.firstUser = firstUser;
        let contracInstanceforFirstUser = contractInstance.connect(firstUser);
        let unableToRead = contracInstanceforFirstUser.returnOwner();
        expect(unableToRead).to.be.revertedWith("Usted no es el propietario");
      });
    });
  });
});

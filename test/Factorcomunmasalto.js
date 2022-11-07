const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");
const signers = {};
let contractFactory;
let contractInstance;
let contractAddr;

describe("Factor comun mas alto", function () {
  describe("Deploy", function () {
    it("Should deploy the smart contract", async function () {
      const [defaultSigner] = await ethers.getSigners();
      signers.defaultSigner = defaultSigner;
      contractFactory = await ethers.getContractFactory(
        "factorComun",
        defaultSigner
      );
      contractInstance = await contractFactory.deploy();
      await contractInstance.deployed();
      contractAddr = contractInstance.address;
    });

    describe("Factor Común Mas Alto", function () {
      it("Should return the largest integer among factor out numbers", async function () {
        const result = await contractInstance.calculate(60, 75);
        expect(result).to.equal(15);
      });
      it("Should return same result in spite of numbers position", async function () {
        const result = await contractInstance.calculate(75, 60);
        expect(result).to.equal(15);
      });
    });
  });
});

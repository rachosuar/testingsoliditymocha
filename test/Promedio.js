const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");
const signers = {};
let contractFactory;
let contractInstance;
let contractAddr;

describe("Promedio", function () {
  describe("Deploy", function () {
    it("Should deploy the smart contract", async function () {
      const [defaultSigner] = await ethers.getSigners();
      signers.defaultSigner = defaultSigner;
      contractFactory = await ethers.getContractFactory(
        "Promedio",
        defaultSigner
      );
      contractInstance = await contractFactory.deploy();
      await contractInstance.deployed();
      contractAddr = contractInstance.address;
    });

    describe("Promedio", function () {
      it("Should return an integer as average of given numbers", async function () {
        const result = await contractInstance.calcular(4, 5, 6);
        expect(result).to.equal(5);
      });
      it("Should return same integer as average if given numbers areall the same", async function () {
        const result = await contractInstance.calcular(7, 7, 7);
        expect(result).to.equal(7);
      });
    });
  });
});

const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");
const signers = {};
let contractFactory;
let contractInstance;
let contractAddr;

describe("Concatenador", function () {
  describe("Deploy", function () {
    it("Should deploy the smart contract", async function () {
      const [defaultSigner] = await ethers.getSigners();
      signers.defaultSigner = defaultSigner;
      contractFactory = await ethers.getContractFactory(
        "concatenador",
        defaultSigner
      );
      contractInstance = await contractFactory.deploy();
      await contractInstance.deployed();
      contractAddr = contractInstance.address;
    });

    describe("Concatenar dos Strings", function () {
      it("Should return only one string with both args separeted by an empty space", async function () {
        const result = await contractInstance.concatenar("Hola", "Mundo");
        expect(result).to.equal("Hola Mundo");
      });
    });
  });
});

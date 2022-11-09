const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");
const signers = {};
let contractFactory;
let contractInstance;
let contractAddr;

describe("Palindrome", function () {
  describe("Deploy", function () {
    it("Should deploy the smart contract", async function () {
      const [defaultSigner] = await ethers.getSigners();
      signers.defaultSigner = defaultSigner;
      contractFactory = await ethers.getContractFactory(
        "palindrome",
        defaultSigner
      );
      contractInstance = await contractFactory.deploy();
      await contractInstance.deployed();
      contractAddr = contractInstance.address;
    });

    describe("Es palindromo", function () {
      it("Should return true if a number is palindrome", async function () {
        const result = await contractInstance.esPalindromo(1221);
        expect(result).to.equal(true);
      });
      it("Should return false if a number is NOT palindrome", async function () {
        const result = await contractInstance.esPalindromo(1222);
        expect(result).to.equal(false);
      });
    });
  });
});

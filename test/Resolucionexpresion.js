const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");
const signers = {};
let contractFactory;
let contractInstance;
let contractAddr;

describe("Resolucion Expresion", function () {
  describe("Deploy", function () {
    it("Should deploy the smart contract", async function () {
      const [defaultSigner] = await ethers.getSigners();
      signers.defaultSigner = defaultSigner;
      contractFactory = await ethers.getContractFactory(
        "ResoulcionExpresion",
        defaultSigner
      );
      contractInstance = await contractFactory.deploy();
      await contractInstance.deployed();
      contractAddr = contractInstance.address;
    });

    describe("Expresion", function () {
      it("Should return the series 1+x+x^2+...x^n", async function () {
        const result = await contractInstance.calculate(2, 3);
        expect(result).to.equal(15);
      });
      it("Should return the series 1+x+x^2+...x^n", async function () {
        const result = await contractInstance.calculate(5, 1);
        expect(result).to.equal(6);
      });
    });
  });
});

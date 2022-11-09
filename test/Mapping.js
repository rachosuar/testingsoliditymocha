const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");
const signers = {};
let contractFactory;
let contractInstance;
let contractAddr;

describe("Mapping", function () {
  describe("Deploy", function () {
    it("Should deploy the smart contract", async function () {
      const [defaultSigner] = await ethers.getSigners();
      signers.defaultSigner = defaultSigner;
      contractFactory = await ethers.getContractFactory(
        "mapContract",
        defaultSigner
      );
      contractInstance = await contractFactory.deploy();
      await contractInstance.deployed();
      contractAddr = contractInstance.address;
    });

    describe("Actualizar el balance", function () {
      it("Should return the new balance after updating.", async function () {
        await contractInstance.updateBalance(20);
        await contractInstancecd.wait();
        const result = await contractInstance.balance(signers.defaultSigner);

        expect(result).to.equal(20);
      });
    });
    describe("Consultar el balance", function () {
      it("Should return balance when the account owner ask only.", async function () {
        const [firstUser] = await ethers.getSigners();
        signers.firstUser = firstUser;
        let contracInstanceforFirstUser = contractInstance.connect(firstUser);
        let unableToRead = contracInstanceforFirstUser.checkBalance(
          signers.defaultSigner
        );
        expect(unableToRead).to.be.revertedWith("Usted no es el propietario");
      });
    });
  });
});

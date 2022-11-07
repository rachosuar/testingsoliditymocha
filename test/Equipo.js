const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");
const signers = {};
let contractFactory;
let contractInstance;
let contractAddr;

describe("Equipo", function () {
  describe("Deploy", function () {
    it("Should deploy the smart contract", async function () {
      const [defaultSigner] = await ethers.getSigners();
      signers.defaultSigner = defaultSigner;
      contractFactory = await ethers.getContractFactory(
        "Equipo",
        defaultSigner
      );
      contractInstance = await contractFactory.deploy();
      await contractInstance.deployed();
      contractAddr = contractInstance.address;
    });

    describe("Equipo", function () {
      it("Should recive max 16 players", async function () {
        for (let i = 0; i < 16; i++) {
          contractInstance.addPlayer();
        }
        const result = await contractInstance.addPlayer();
        expect(result).to.be.revertedWith("Ya hay 16 jugadores");
      });
    });
  });
});

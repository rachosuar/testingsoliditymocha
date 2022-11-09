const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");
const signers = {};
let contractFactory;
let contractInstance;
let contractAddr;

describe("Estudiantes", function () {
  describe("Deploy", function () {
    it("Should deploy the smart contract", async function () {
      const [defaultSigner] = await ethers.getSigners();
      signers.defaultSigner = defaultSigner;
      contractFactory = await ethers.getContractFactory(
        "Estudiantes",
        defaultSigner
      );
      contractInstance = await contractFactory.deploy();
      await contractInstance.deployed();
      contractAddr = contractInstance.address;
    });

    describe("Lista de notas", function () {
      it("Should return notes of four subjects ", async function () {
        await contractInstance.setNotas("Juan", 1, 2, 3, 4);
        const result = await contractInstance.getNotas();
        expect(result.length).to.equal(4);
      });
      it("Should emit an event with the name and ", async function () {
        const tx = await contractInstance.setNotas("Juan", 1, 2, 3, 4);
        console.dir(tx, { deph: 0 });
        // expect(result).to.equal(4);
      });
    });
  });
});

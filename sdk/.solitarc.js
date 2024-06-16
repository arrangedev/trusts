const { Keypair } = require("@solana/web3.js");
const { readFileSync } = require("fs");
const path = require("path");

const PROGRAM_NAME = "trusts";

const programDir = path.join(__dirname, "..", "programs", PROGRAM_NAME);
const idlDir = path.join(__dirname, "idl");
const sdkDir = path.join(__dirname, "src", "generated");
const binaryInstallDir = path.join(__dirname, "..", ".crates");

module.exports = {
  idlGenerator: "anchor",
  programName: PROGRAM_NAME,
  programId: "ATVixC5VzQYwU9FB2NQgzQ6yp7jxz4XYsJLvkqMQQgEV",
  idlDir,
  sdkDir,
  binaryInstallDir,
  programDir,
};
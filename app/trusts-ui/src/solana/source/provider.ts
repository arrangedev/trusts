import * as anchor from "@coral-xyz/anchor";
import { connection } from "./connection";

export const getProvider = (wallet: anchor.Wallet) => {
  const opts = {
    preflightCommitment: "processed" as anchor.web3.ConfirmOptions,
  };

  const provider = new anchor.AnchorProvider(
    connection,
    wallet,
    opts.preflightCommitment
  );

  return provider;
};
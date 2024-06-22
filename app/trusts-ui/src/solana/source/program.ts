import * as anchor from "@coral-xyz/anchor";
import { getProvider } from "./provider";
import { IDL, Trusts } from "./idl/idl";
import { PublicKey } from "@solana/web3.js";

export const getProgram = (wallet: anchor.Wallet) => {
  const provider = getProvider(wallet);

  const idl = IDL as anchor.Idl;
  const program = new anchor.Program(
    idl,
    new PublicKey("arngwbKQjNF1q6s1NYURDPNQWHCQTfx5sdMQS9tB7ta"),
    provider
  ) as unknown as anchor.Program<Trusts>;

  return program;
};

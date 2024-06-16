import * as trusts from "@arrangedev/trusts-sdk";
import * as anchor from "@coral-xyz/anchor";
import * as web3 from "@solana/web3.js";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import { getProgram } from "../source/program";

interface InitVaultArgs {
  mint: web3.PublicKey;
  interval: trusts.types.Intervals;
  targets: web3.PublicKey[];
  percentage: anchor.BN;
  authority?: web3.PublicKey;
}

/**
    -- Initialized a vault account for a given user --
    @params Wallet as "NodeWallet" type, metadata with "InitVaultArgs" type
    @returns Transaction object with the init_vault instruction
**/
export async function initVault(wallet: NodeWallet, metadata: InitVaultArgs) {
  let { mint, interval, targets, percentage, authority } = metadata;

  const program = await getProgram(wallet);

  let vaultId = Math.floor(10000 + Math.random() * 90000);

  const [vaultPDA] = await web3.PublicKey.findProgramAddressSync(
    [
      Buffer.from("yield_vault"),
      mint.toBuffer(),
      new anchor.BN(vaultId).toArrayLike(Buffer, "le", 8),
      wallet.publicKey.toBuffer(),
    ],
    program.programId
  );

  const instruction = trusts.instructions.createInitVaultInstruction(
    {
      vault: vaultPDA,
      payer: wallet.publicKey,
      mint: mint,
      systemProgram: web3.SystemProgram.programId,
    },
    {
      vaultId: vaultId,
      interval: interval,
      targets: targets,
      authority: authority ? authority : wallet.publicKey,
      // TODO: Add crank address from turnkey
      crank: new web3.PublicKey(""),
      percentage: percentage
    }
  );

  return instruction;
}

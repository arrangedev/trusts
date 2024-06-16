import * as trusts from "@arrangedev/trusts-sdk";
import * as web3 from "@solana/web3.js";
import * as spl from "@solana/spl-token";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import { connection } from "../source/connection";


interface DepositVaultArgs {
    amount: number,
    vaultPDA: web3.PublicKey,
    mint: web3.PublicKey,
    decimals?: number,
}

/**
    -- Conducts a deposit into the vault account for a given token mint --
    @params Wallet as "NodeWallet" type, metadata with "DepositVaultArgs" type
    @returns Transaction object with the deposit_vault instruction, and token account creation (if account does not exist)
**/
export async function depositVault(wallet: NodeWallet, metadata: DepositVaultArgs) {
    let { amount, vaultPDA, mint, decimals } = metadata; 

    let tx = new web3.Transaction();

    // Get token accounts
    let vaultTokenAccount = spl.getAssociatedTokenAddressSync(mint, vaultPDA, true);
    let payerTokenAccount = spl.getAssociatedTokenAddressSync(mint, wallet.publicKey);

    let tokenAccountInfo = await connection.getAccountInfo(vaultTokenAccount);

    // If vault token account does not exist, create an instruction and add it to the transaction
    if (!tokenAccountInfo || !tokenAccountInfo.data) {
        console.log("Creating token account...");
        await tx.add(await spl.createAssociatedTokenAccountInstruction(wallet.publicKey, vaultTokenAccount, vaultPDA, mint, spl.TOKEN_PROGRAM_ID))
    }

    const instruction = trusts.instructions.createDepositVaultInstruction({
        vault: vaultPDA,
        vaultTokenAccount: vaultTokenAccount,
        mint: mint,
        payer: wallet.publicKey,
        payerTokenAccount: payerTokenAccount,
        tokenProgram: spl.TOKEN_PROGRAM_ID,
        systemProgram: web3.SystemProgram.programId,
        associatedTokenProgram: spl.ASSOCIATED_TOKEN_PROGRAM_ID
    }, {
        amount: amount
    });

    await tx.add(instruction);

    return tx
}
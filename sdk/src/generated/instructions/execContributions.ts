/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category ExecContributions
 * @category generated
 */
export const execContributionsStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'ExecContributionsInstructionArgs'
)
/**
 * Accounts required by the _execContributions_ instruction
 *
 * @property [_writable_] vault
 * @property [_writable_] vaultTokenAccount
 * @property [] mint
 * @property [_writable_, **signer**] payer
 * @property [_writable_] payerTokenAccount
 * @property [] clock
 * @property [] associatedTokenProgram
 * @category Instructions
 * @category ExecContributions
 * @category generated
 */
export type ExecContributionsInstructionAccounts = {
  vault: web3.PublicKey
  vaultTokenAccount: web3.PublicKey
  mint: web3.PublicKey
  payer: web3.PublicKey
  payerTokenAccount: web3.PublicKey
  clock: web3.PublicKey
  systemProgram?: web3.PublicKey
  tokenProgram?: web3.PublicKey
  associatedTokenProgram: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const execContributionsInstructionDiscriminator = [
  140, 63, 252, 5, 186, 141, 12, 125,
]

/**
 * Creates a _ExecContributions_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category ExecContributions
 * @category generated
 */
export function createExecContributionsInstruction(
  accounts: ExecContributionsInstructionAccounts,
  programId = new web3.PublicKey('ATVixC5VzQYwU9FB2NQgzQ6yp7jxz4XYsJLvkqMQQgEV')
) {
  const [data] = execContributionsStruct.serialize({
    instructionDiscriminator: execContributionsInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.vault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.vaultTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.payerTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.clock,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.associatedTokenProgram,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}

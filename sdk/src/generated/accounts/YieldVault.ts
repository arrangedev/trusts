/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import { Protocols, protocolsBeet } from '../types/Protocols'
import { Intervals, intervalsBeet } from '../types/Intervals'

/**
 * Arguments used to create {@link YieldVault}
 * @category Accounts
 * @category generated
 */
export type YieldVaultArgs = {
  authority: web3.PublicKey
  protocol: Protocols
  interval: Intervals
  amount: beet.bignum
  vaultId: beet.bignum
  targets: web3.PublicKey[]
  crank: web3.PublicKey
  percentage: beet.bignum
  mint: web3.PublicKey
  bump: number
}

export const yieldVaultDiscriminator = [17, 229, 96, 254, 254, 179, 195, 163]
/**
 * Holds the data for the {@link YieldVault} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class YieldVault implements YieldVaultArgs {
  private constructor(
    readonly authority: web3.PublicKey,
    readonly protocol: Protocols,
    readonly interval: Intervals,
    readonly amount: beet.bignum,
    readonly vaultId: beet.bignum,
    readonly targets: web3.PublicKey[],
    readonly crank: web3.PublicKey,
    readonly percentage: beet.bignum,
    readonly mint: web3.PublicKey,
    readonly bump: number
  ) {}

  /**
   * Creates a {@link YieldVault} instance from the provided args.
   */
  static fromArgs(args: YieldVaultArgs) {
    return new YieldVault(
      args.authority,
      args.protocol,
      args.interval,
      args.amount,
      args.vaultId,
      args.targets,
      args.crank,
      args.percentage,
      args.mint,
      args.bump
    )
  }

  /**
   * Deserializes the {@link YieldVault} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [YieldVault, number] {
    return YieldVault.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link YieldVault} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<YieldVault> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find YieldVault account at ${address}`)
    }
    return YieldVault.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      'ATVixC5VzQYwU9FB2NQgzQ6yp7jxz4XYsJLvkqMQQgEV'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, yieldVaultBeet)
  }

  /**
   * Deserializes the {@link YieldVault} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [YieldVault, number] {
    return yieldVaultBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link YieldVault} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return yieldVaultBeet.serialize({
      accountDiscriminator: yieldVaultDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link YieldVault} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: YieldVaultArgs) {
    const instance = YieldVault.fromArgs(args)
    return yieldVaultBeet.toFixedFromValue({
      accountDiscriminator: yieldVaultDiscriminator,
      ...instance,
    }).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link YieldVault} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: YieldVaultArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      YieldVault.byteSize(args),
      commitment
    )
  }

  /**
   * Returns a readable version of {@link YieldVault} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      authority: this.authority.toBase58(),
      protocol: 'Protocols.' + Protocols[this.protocol],
      interval: 'Intervals.' + Intervals[this.interval],
      amount: (() => {
        const x = <{ toNumber: () => number }>this.amount
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      vaultId: (() => {
        const x = <{ toNumber: () => number }>this.vaultId
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      targets: this.targets,
      crank: this.crank.toBase58(),
      percentage: (() => {
        const x = <{ toNumber: () => number }>this.percentage
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      mint: this.mint.toBase58(),
      bump: this.bump,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const yieldVaultBeet = new beet.FixableBeetStruct<
  YieldVault,
  YieldVaultArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['authority', beetSolana.publicKey],
    ['protocol', protocolsBeet],
    ['interval', intervalsBeet],
    ['amount', beet.u64],
    ['vaultId', beet.u64],
    ['targets', beet.array(beetSolana.publicKey)],
    ['crank', beetSolana.publicKey],
    ['percentage', beet.u64],
    ['mint', beetSolana.publicKey],
    ['bump', beet.u8],
  ],
  YieldVault.fromArgs,
  'YieldVault'
)

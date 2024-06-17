import * as trusts from "@arrangedev/trusts-sdk";

export type CreateInitialState = {
  name: string;
  admin: string;
  isPublic: string;
  deposit: number;
  percentage: number;
  targets: string[];
  mint: Mints;
  interval: trusts.types.Intervals;
  email: string;
  notificationConfig: {
    deposits: boolean,
    contributions: boolean,
    withdrawals: boolean
  }
}

export enum Mints {
  USDC = "",
  SOL = "",
  BONK = "",
  JUP = "",
}

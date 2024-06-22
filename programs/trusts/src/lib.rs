/*
Copyright 2024 Arrange Technologies,

www.arrange.dev

DISCLAIMER:
This code is currently unaudited, while reusing 
and duplication are allowed, please do so at your
own risk. Please consult the license for more information.
*/

use anchor_lang::prelude::*;

pub mod instructions;
pub mod util;
pub mod state;
pub mod error;

pub use instructions::*;
use crate::state::vault::*;

use solana_security_txt::security_txt;

#[cfg(not(feature = "no-entrypoint"))]
security_txt! {
    name: "Trusts Protocol v1",
    project_url: "http://trusts.arrange.dev",
    contacts: "email:joey.meere@gmail.com,discord:0xsavant",
    policy: "",
    preferred_languages: "en",
    source_code: "https://github.com/arrangedev/trusts"
}

declare_id!("arngwbKQjNF1q6s1NYURDPNQWHCQTfx5sdMQS9tB7ta");

#[program]
pub mod trusts {
    use super::*;

    pub fn init_vault(
        ctx: Context<InitializeVault>,
        vault_id: u64,
        authority: Pubkey,
        interval: Intervals,
        targets: Vec<Pubkey>,
        crank: Pubkey,
        percentage: u64
    ) -> Result<()> {
        instructions::init(
            ctx, 
            vault_id, 
            authority,
            interval, 
            targets, 
            crank,
            percentage
        )
    }

    pub fn deposit_vault(
        ctx: Context<Deposit>,
        amount: u64,
    ) -> Result<()> {
        instructions::deposit(
            ctx, 
            amount
        )
    }

    pub fn deposit_protocol(
        ctx: Context<DepositProtocol>,
        amount: u64
    ) -> Result<()> {
        instructions::deposit_into_protocol(
            ctx, 
            amount
        )
    }

    pub fn exec_contributions<'info>(
        ctx: Context<'_, '_, '_, 'info, MakeContributions<'info>>
    ) -> Result<()> {
        instructions::make_contributions(
            ctx
        )
    }

    pub fn withdraw_vault(
        ctx: Context<Withdraw>,
        amount: u64
    ) -> Result<()> {
        instructions::withdraw(
            ctx, 
            amount
        )
    }

    pub fn withdraw_protocol(
        ctx: Context<WithdrawFromProtocol>,
        amount: u64
    ) -> Result<()> {
        instructions::withdraw_from_protocol(
            ctx, 
            amount
        )
    }

    pub fn close_vault(
        ctx: Context<Close>
    ) -> Result<()> {
        instructions::close(
            ctx
        )
    }
}

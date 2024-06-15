use anchor_lang::prelude::*;

pub mod instructions;
pub mod util;
pub mod state;
pub mod error;

pub use instructions::*;
use crate::state::vault::*;

declare_id!("ATVixC5VzQYwU9FB2NQgzQ6yp7jxz4XYsJLvkqMQQgEV");

#[program]
pub mod trusts {
    use super::*;

    pub fn init_vault(
        ctx: Context<InitializeVault>,
        vault_id: u64,
        authority: Pubkey,
        protocol: Protocols,
        interval: Intervals,
        amount: u64,
        targets: Vec<Pubkey>,
        crank: Pubkey,
        percentage: f64
    ) -> Result<()> {
        instructions::init(
            ctx, 
            vault_id, 
            authority,
            protocol, 
            interval, 
            amount, 
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

    pub fn exec_contributions<'info>(
        ctx: Context<'_, '_, '_, 'info, MakeContributions<'info>>
    ) -> Result<()> {
        instructions::make_contributions(ctx)
    }

    pub fn withdraw_vault(
        ctx: Context<Withdraw>,
        amount: u64
    ) -> Result<()> {
        instructions::withdraw(ctx, amount)
    }

    pub fn withdraw_protocol(
        ctx: Context<WithdrawFromProtocol>,
        amount: u64
    ) -> Result<()> {
        instructions::withdraw_from_protocol(ctx, amount)
    }
}

#[derive(Accounts)]
pub struct Initialize {}

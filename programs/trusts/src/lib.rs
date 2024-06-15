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

    pub fn deposit(
        ctx: Context<Deposit>,
        vault_id: u64,
        amount: u64,
    ) -> Result<()> {
        instructions::deposit(
            ctx, 
            vault_id, 
            amount
        )
    }
}

#[derive(Accounts)]
pub struct Initialize {}

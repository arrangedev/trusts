use anchor_lang::prelude::*;
use anchor_spl::token;

use crate::{error::VaultError, Intervals, Protocols, YieldVault};

pub fn init(
    ctx: Context<InitializeVault>,
    vault_id: u64,
    authority: Pubkey,
    interval: Intervals,
    targets: Vec<Pubkey>,
    crank: Pubkey,
    percentage: u64
) -> Result<()> {
    require!(
        percentage >= YieldVault::MIN_PERCENTAGE, 
        VaultError::PercentageTooSmall
    );

    require!(
        percentage <= YieldVault::MAX_PERCENTAGE, 
        VaultError::PercentageTooLarge
    );

    ctx.accounts.vault.set_inner(
            YieldVault::new(
                authority,
                Protocols::Lulo,
                interval,
                0,
                vault_id,
                targets,
                crank,
                percentage,
                ctx.accounts.mint.key(),
                *ctx.bumps
                    .get("vault")
                    .expect("Failed to derive bump for `vault`"),
            )?
        );
    Ok(())
}

#[derive(Accounts)]
#[instruction(
    vault_id: u64,
    mint: Pubkey
)]
pub struct InitializeVault<'info> {
    #[account(
        init,
        payer = payer,
        space = YieldVault::SPACE,
        seeds = [
            YieldVault::SEED_PREFIX.as_bytes(),
            mint.key().as_ref(),
            vault_id.to_le_bytes().as_ref(),
            payer.key().as_ref()
        ],
        bump,
    )]
    pub vault: Account<'info, YieldVault>,
    pub mint: Account<'info, token::Mint>,
    #[account(mut)]
    pub payer: Signer<'info>,
    pub system_program: Program<'info, System>,
}
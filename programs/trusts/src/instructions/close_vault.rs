use anchor_lang::prelude::*;

use crate::{error::VaultError, YieldVault};

// Closes a vault account
// WARNING: WITHDRAW NEEDS TO BE CALLED BEFORE, OR FUNDS WILL BE LOST
pub fn close(ctx: Context<Close>) -> Result<()> {
    let vault = &ctx.accounts.vault;
    let payer = &ctx.accounts.payer;

    require!(
        payer.key() == vault.authority, 
        VaultError::WrongVaultAuthority
    );
    
    Ok(())
}

#[derive(Accounts)]
pub struct Close<'info> {
    #[account(
        mut,
        seeds = [
            YieldVault::SEED_PREFIX.as_bytes(),
            vault.mint.key().as_ref(),
            vault.vault_id.to_le_bytes().as_ref(),
            payer.key().as_ref()
        ],
        bump = vault.bump,
        close = payer
    )]
    pub vault: Account<'info, YieldVault>,
    #[account(mut)]
    pub payer: Signer<'info>,
}
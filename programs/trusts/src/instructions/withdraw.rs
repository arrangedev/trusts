use anchor_lang::prelude::*;
use anchor_spl::{token, associated_token};

use crate::{error::VaultError, YieldVault};

// This should withdraw from the vault
pub fn withdraw(
    ctx: Context<Withdraw>,
    amount: u64
) -> Result<()> {
    let vault = &mut ctx.accounts.vault;
    require!(
        ctx.accounts.payer.key() == vault.authority,
        VaultError::WrongVaultAuthority
    );

    let bump = vault.bump.to_le_bytes();
    let id_ref = vault.vault_id.to_le_bytes();
    let seeds = vec![YieldVault::SEED_PREFIX.as_bytes(), vault.mint.as_ref(), id_ref.as_ref(), vault.authority.as_ref(), &bump];
    let signer_seeds = vec![seeds.as_slice()];

    token::transfer(
        CpiContext::new_with_signer(
            ctx.accounts.token_program.to_account_info(),
            token::Transfer {
                from: ctx.accounts.payer_token_account.to_account_info(),
                to: ctx.accounts.vault_token_account.to_account_info(),
                authority: ctx.accounts.payer.to_account_info(),
            },
            &signer_seeds
        ), 
        amount
    )?;

    vault.amount -= amount;

    Ok(())
}

#[derive(Accounts)]
pub struct Withdraw<'info> {
    #[account(
        mut,
        seeds = [
            YieldVault::SEED_PREFIX.as_bytes(),
            mint.key().as_ref(),
            vault.vault_id.to_le_bytes().as_ref(),
            payer.key().as_ref()
        ],
        bump,
    )]
    pub vault: Account<'info, YieldVault>,
    #[account(
		mut,
	    associated_token::mint = mint,
	    associated_token::authority = vault,
	)]
    pub vault_token_account: Account<'info, token::TokenAccount>,
    pub mint: Account<'info, token::Mint>,

    #[account(mut)]
    pub payer: Signer<'info>,
    #[account(
        mut,
        associated_token::mint = mint.key(),
        associated_token::authority = payer.key()
    )]
    pub payer_token_account: Account<'info, token::TokenAccount>,
    
    // Programs & Sysvars
    pub clock: Sysvar<'info, Clock>,
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, token::Token>,
    pub associated_token_program: Program<'info, associated_token::AssociatedToken>,
}
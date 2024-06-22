use anchor_lang::prelude::*;
use anchor_spl::{associated_token, token::{self}};

use crate::{error::VaultError, state::YieldVault};

// Deposits into a Yield Vault
pub fn deposit(
    ctx: Context<Deposit>,
    amount: u64
) -> Result<()> {
    let vault = &mut ctx.accounts.vault;

    require_eq!(
        vault.authority,
        ctx.accounts.payer.key(),
        VaultError::WrongVaultAuthority
    );

    token::transfer(
        CpiContext::new(
            ctx.accounts.token_program.to_account_info(),
            token::Transfer {
                from: ctx.accounts.payer_token_account.to_account_info(),
                to: ctx.accounts.vault_token_account.to_account_info(),
                authority: ctx.accounts.payer.to_account_info(),
            },
        ), 
        amount
    )?;

    vault.amount += amount;

    Ok(())
}

#[derive(Accounts)]
pub struct Deposit<'info> {
    #[account(
        mut,
        seeds = [
            YieldVault::SEED_PREFIX.as_bytes(),
            mint.key().as_ref(),
            vault.vault_id.to_le_bytes().as_ref(),
            payer.key().as_ref()
        ],
        bump = vault.bump,
    )]
    pub vault: Account<'info, YieldVault>,
    #[account(
        mut,
        associated_token::mint = mint.key(),
        associated_token::authority = vault.key()
    )]
    pub vault_token_account: Account<'info, token::TokenAccount>,
    #[account(
        constraint = mint.key() == vault.mint
    )]
    pub mint: Account<'info, token::Mint>,

    #[account(
        mut,
        associated_token::mint = mint.key(),
        associated_token::authority = payer.key()
    )]
    pub payer_token_account: Account<'info, token::TokenAccount>,
    #[account(mut)]
    pub payer: Signer<'info>,
    
    // Programs
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, token::Token>,
    pub associated_token_program: Program<'info, associated_token::AssociatedToken>,
}
use anchor_lang::prelude::*;
use anchor_spl::{token, associated_token};

use crate::{error::VaultError, YieldVault};

pub fn withdraw_from_protocol(
    ctx: Context<WithdrawFromProtocol>,
    amount: u64
) -> Result<()> {
    let vault = &mut ctx.accounts.vault;

    require!(
        ctx.accounts.payer.key() == vault.authority || ctx.accounts.payer.key() == vault.crank,
        VaultError::WrongVaultAuthority
    );

    let bump = vault.bump.to_le_bytes();
    let id_ref = vault.vault_id.to_le_bytes();
    let seeds = vec![YieldVault::SEED_PREFIX.as_bytes(), vault.mint.as_ref(), id_ref.as_ref(), vault.authority.as_ref(), &bump];
    let signer_seeds = vec![seeds.as_slice()];

    lulo_cpi::cpi::initiate_withdraw(
        CpiContext::new_with_signer(
            ctx.accounts.lulo_program.to_account_info(),
            lulo_cpi::cpi::accounts::InitiateWithdraw {
                owner: vault.to_account_info(),
                fee_payer: ctx.accounts.payer.to_account_info(),
                owner_token_account: ctx.accounts.vault_token_account.to_account_info(),
                user_account: ctx.accounts.lulo_user_account.to_account_info(),
                flex_user_token_account: ctx.accounts.lulo_user_token_account.to_account_info(),
                mint_address: ctx.accounts.mint.to_account_info(),
                promotion_reserve: ctx.accounts.lulo_promotion_reserve.to_account_info(),
                flex_program: ctx.accounts.lulo_program.to_account_info(),
                token_program: ctx.accounts.token_program.to_account_info(),
                system_program: ctx.accounts.system_program.to_account_info(),
                associated_token_program: ctx
                    .accounts
                    .associated_token_program
                    .to_account_info(),
            },
            &signer_seeds,
        ),
        amount, // withdraw_amount
        false,  // withdraw_all
        None,   // return_type
    )?;

    Ok(())
}

#[derive(Accounts)]
pub struct WithdrawFromProtocol<'info> {
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
    /// CHECK: cpi
    pub lulo_user_account: UncheckedAccount<'info>,
    #[account(mut)]
    /// CHECK: cpi
    pub lulo_user_token_account: UncheckedAccount<'info>,
    #[account(mut)]
    /// CHECK: CPI
    pub lulo_promotion_reserve: UncheckedAccount<'info>,

    #[account(mut)]
    pub payer: Signer<'info>,
    #[account(
        mut,
        constraint = payer_token_account.owner == payer.key()
    )]
    pub payer_token_account: Account<'info, token::TokenAccount>,
    // Programs & Sysvars
    #[account(address = lulo_cpi::ID)]
    /// CHECK: CPI
    pub lulo_program: AccountInfo<'info>,
    pub clock: Sysvar<'info, Clock>,
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, token::Token>,
    pub associated_token_program: Program<'info, associated_token::AssociatedToken>,
}
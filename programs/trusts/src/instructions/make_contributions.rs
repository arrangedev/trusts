use anchor_lang::prelude::*;
use anchor_spl::{token, associated_token};

use crate::{error::VaultError, YieldVault};

type AnchorAccount<'info> = anchor_lang::prelude::AccountInfo<'info>;

pub fn make_contributions<'info>(
    ctx: Context<'_, '_, '_, 'info, MakeContributions<'info>>,
) -> Result<()> {
    let vault = &mut ctx.accounts.vault;
    let target_accounts = ctx.remaining_accounts;

    require!(
        ctx.accounts.payer.key() == vault.authority || ctx.accounts.payer.key() == vault.crank,
        VaultError::WrongVaultAuthority
    );

    require!(target_accounts.len() <= 5, VaultError::TooManyTargets);

    let initial = vault.amount;
    let percentage: f64 = (vault.percentage / 100) as f64;
    let current_balance = ctx.accounts.vault_token_account.amount;

    let interest = current_balance - initial;
    let amount = (interest as f64 * percentage) as u64;

    let length = vault.targets.len();
    let send_amount = amount / length as u64;

    let elapsed: Vec<Pubkey> = vec![];

    for account in target_accounts.iter() {
        require!(vault.targets.contains(&account.key()), VaultError::TargetAccountInvalid);
        require!(elapsed.contains(&account.key()) == false, VaultError::TargetAccountInvalid);

        let token_program_info = ctx.accounts.token_program.to_account_info();
        let payer_token_account_info: AnchorAccount = ctx.accounts.payer_token_account.to_account_info();
        let account_info = account.to_account_info();
        let payer_info: AnchorAccount = ctx.accounts.payer.to_account_info();

        let cpi_ctx: lulo_cpi::CpiContext<'_, '_, '_, 'info, anchor_spl::token::Transfer<'info>> = 
            CpiContext::new(
                token_program_info,
                token::Transfer {
                    from: payer_token_account_info.to_account_info(),
                    to: account_info,
                    authority: payer_info.to_account_info(),
                },
            );

        token::transfer(
            cpi_ctx,
            send_amount,
        )?;
    };
    
    Ok(())
}

#[derive(Accounts)]
pub struct MakeContributions<'info> {
    #[account(mut)]
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
        constraint = payer_token_account.owner == payer.key()
    )]
    pub payer_token_account: Account<'info, token::TokenAccount>,
    // Programs & Sysvars
    pub clock: Sysvar<'info, Clock>,
    pub system_program: Program<'info, System>,
    pub token_program: Program<'info, token::Token>,
    pub associated_token_program: Program<'info, associated_token::AssociatedToken>,
}
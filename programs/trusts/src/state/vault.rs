use anchor_lang::prelude::*;

use crate::error::VaultError;

#[account]
pub struct YieldVault {
    pub authority: Pubkey,
    pub protocol: Protocols,
    pub interval: Intervals,
    pub amount: u64,
    pub vault_id: u64,
    pub targets: Vec<Pubkey>,
    pub crank: Pubkey,
    pub percentage: f64,
    pub mint: Pubkey,
    pub bump: u8,
}

impl YieldVault {
    pub const SEED_PREFIX: &'static str = "yield_vault";
    pub const MAX_TARGETS: usize = 5;

    pub const SPACE: usize = 8 
        + 4                         // u64
        + 4                         // String
        + 4                         // u64
        + 4                         // u64
        + 4                         // u64
        + 1                         // u8
        + 160                       // Vec<Pubkey> (Max 5)
        + 32                        // Pubkey
        + 1                         // u8
        + 4                         // Enum (Singleton)
        + 250;                      // Padding

    pub fn new(
        authority: Pubkey,
        protocol: Protocols, 
        interval: Intervals, 
        amount: u64, 
        vault_id: u64, 
        targets: Vec<Pubkey>, 
        crank: Pubkey,
        percentage: f64,
        mint: Pubkey, 
        bump: u8
    ) -> Result<Self> {
        if targets.len() > 5 {
            return Err(VaultError::TooManyTargets.into());
        }

        Ok(Self {
            authority,
            protocol,
            interval,
            amount,
            vault_id,
            targets,
            crank,
            percentage,
            mint,
            bump
        })
    }
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq, Eq)]
pub enum Protocols {
    Solend,
}

impl Default for Protocols {
    fn default() -> Self {
        Protocols::Solend
    }
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq, Eq)]
pub enum Intervals {
    Weekly,
    Monthly,
    Yearly
}

impl Default for Intervals {
    fn default() -> Self {
        Intervals::Weekly
    }
}
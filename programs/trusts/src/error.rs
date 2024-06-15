use anchor_lang::prelude::*;

#[error_code]
pub enum VaultError {
    #[msg("Attempting to withdraw from vault with account that is not the authority")]
    WrongVaultAuthority,

    #[msg("The target account provided is invalid")]
    TargetAccountInvalid,

    #[msg("This mint is not current supported")]
    MintNotSupported,

    #[msg("Max targets specifiable is 5.")]
    TooManyTargets,
}
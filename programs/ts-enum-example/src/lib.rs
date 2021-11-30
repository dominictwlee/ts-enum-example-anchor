use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod ts_enum_example {
    use super::*;
    pub fn initialize(ctx: Context<Initialize>, arg: MemberType) -> ProgramResult {
        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(arg: MemberType)]
pub struct Initialize<'info> {
    pub authority: Signer<'info>,
}

#[derive(AnchorDeserialize, AnchorSerialize)]
pub enum MemberType {
    Creator,
    Contributor,
}

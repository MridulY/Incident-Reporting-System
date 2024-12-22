use ic_cdk::export_candid;
use candid::Principal;
use ic_cdk::api::management_canister::main::CanisterStatusResponse;
use crate::incident::types::Incident;


pub mod incident;
pub mod state_handler;

#[ic_cdk::query]
fn greet(name: String) -> String {
    format!("Hello, {}!", name)
}

export_candid!();
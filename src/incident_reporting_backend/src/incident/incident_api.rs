use candid::Principal;
use ic_cdk::api::management_canister::main::raw_rand;
use sha2::{Digest, Sha256};

use crate::state_handler::{mutate_state, read_state, Candid};
use crate::incident::types::Incident;

#[ic_cdk::update]
pub async fn add_incident(
    data: Incident
) -> String {
    let uuids = raw_rand().await.unwrap().0;
        let uid = format!("{:x}", Sha256::digest(&uuids));
        let id = uid.clone().to_string();
    mutate_state(|state| {
        // Retrieve the current next_id valu

        // Create a new Incident object
        //let incident = Incident::new(id.clone(), title, description, location, reporter, media_url);

        // Insert the incident into the incident_data map
        state
            .incident_data
            .insert(id.clone(), Candid(data));
    });
    id
}

#[ic_cdk::query]
pub fn get_incident(id: String) -> Result<Incident, String> {
    read_state(|state| {
        state
            .incident_data
            .get(&id) // Try to fetch the incident by ID
            .map(|incident| incident.0.clone()) // Extract and clone the Incident data
            .ok_or_else(|| format!("Incident with ID {} not found", id)) // Return an error if not found
    })
}
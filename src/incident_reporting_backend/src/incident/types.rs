use candid::{CandidType, Principal};
use serde::{Deserialize, Serialize};

#[derive(CandidType, Deserialize, Serialize, Clone, Debug)]
pub struct Incident {
    pub id: String,
    pub title: String,
    pub description: String,
    pub location: String,
    pub reporter: Principal,
    pub media_url: Option<String>,
    pub status: IncidentStatus,
    pub timestamp: u64,
}

#[derive(CandidType, Deserialize, Serialize, Clone, Debug, PartialEq)]
pub enum IncidentStatus {
    Pending,
    Verified,
    Resolved,
}

impl Default for IncidentStatus {
    fn default() -> Self {
        IncidentStatus::Pending
    }
}

impl Incident {
    pub fn new(
        id: String,
        title: String,
        description: String,
        location: String,
        reporter: Principal,
        media_url: Option<String>,
    ) -> Self {
        Self {
            id,
            title,
            description,
            location,
            reporter,
            media_url,
            status: IncidentStatus::Pending,
            timestamp: ic_cdk::api::time()
        }
    }
}

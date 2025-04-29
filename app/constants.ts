export const CHANNEL_REWARDS: Record<string, string | null> = {
    SPORTS: "CHAMPIONS_LEAGUE_FINAL_TICKET",
    KIDS: null,
    MUSIC: "KARAOKE_PRO_MICROPHONE",
    NEWS: null,
    MOVIES: "PIRATES_OF_THE_CARIBBEAN_COLLECTION",
  };
  
  export const ELIGIBILITY_RESULTS = {
    ELIGIBLE: "CUSTOMER_ELIGIBLE",
    INELIGIBLE: "CUSTOMER_INELIGIBLE",
    TECHNICAL_FAILURE: "Technical failure exception",
    INVALID_ACCOUNT: "Invalid account number exception",
  } as const;
  
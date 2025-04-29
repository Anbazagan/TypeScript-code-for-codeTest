import { CHANNEL_REWARDS, ELIGIBILITY_RESULTS } from "./constants";

interface RewardsServiceParams {
  customerAccountNumber: string;
  portfolio: string[];
  eligibilityService: (accountNumber: string) => string;
}

interface RewardsServiceResponse {
  data?: string[];
  error?: string;
}

export function rewardsService({
  customerAccountNumber,
  portfolio,
  eligibilityService,
}: RewardsServiceParams): RewardsServiceResponse {
  const eligibility = eligibilityService(customerAccountNumber);

  if (eligibility === ELIGIBILITY_RESULTS.ELIGIBLE) {
    const rewards = portfolio.map((channel) => CHANNEL_REWARDS[channel]).filter(Boolean) as string[];
    return { data: rewards };
  }

  if (eligibility === ELIGIBILITY_RESULTS.INVALID_ACCOUNT) {
    return { error: "Invalid account number." };
  }

  return { data: [] };
}

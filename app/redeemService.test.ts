import { rewardsService } from "./redeemService";
import { ELIGIBILITY_RESULTS } from "./constants";

function mockEligibilityService(response: any) {
  return () => response;
}

describe("RewardsService", () => {
  it("Eligible customer receives rewards", () => {
    const result = rewardsService({
      customerAccountNumber: "123",
      portfolio: ["SPORTS", "MUSIC"],
      eligibilityService: mockEligibilityService(ELIGIBILITY_RESULTS.ELIGIBLE),
    });
    expect(result).toEqual({ data: ["CHAMPIONS_LEAGUE_FINAL_TICKET", "KARAOKE_PRO_MICROPHONE"] });
  });

  it("Ineligible customer receives no rewards", () => {
    const result = rewardsService({
      customerAccountNumber: "456",
      portfolio: ["SPORTS"],
      eligibilityService: mockEligibilityService(ELIGIBILITY_RESULTS.INELIGIBLE),
    });
    expect(result).toEqual({ data: [] });
  });

  it("Technical failure results in no rewards", () => {
    const result = rewardsService({
      customerAccountNumber: "789",
      portfolio: ["MUSIC"],
      eligibilityService: mockEligibilityService(ELIGIBILITY_RESULTS.TECHNICAL_FAILURE),
    });
    expect(result).toEqual({ data: [] });
  });

  it("Invalid account returns error", () => {
    const result = rewardsService({
      customerAccountNumber: "invalid",
      portfolio: ["MOVIES"],
      eligibilityService: mockEligibilityService(ELIGIBILITY_RESULTS.INVALID_ACCOUNT),
    });
    expect(result).toEqual({ error: "Invalid account number." });
  });
});

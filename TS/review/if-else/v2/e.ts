type OverageInput = {
  planTier: "starter" | "pro" | "enterprise";
  overageUnits: number;
  accountStatus: "trial" | "active" | "past_due";
  isAnnualContract: boolean;
};

const OVERAGE_RATE: Record<OverageInput["planTier"], number> = {
  starter: 2,
  pro: 1.25,
  enterprise: 0.75,
};

const PAST_DUE_MINIMUM_FEE = 40;

function calculateOverageFee({
  planTier,
  overageUnits,
  accountStatus,
  isAnnualContract,
}: OverageInput): string {
  if (accountStatus === "trial") {
    return "Overage fee: $0.00";
  }

  if (planTier === "enterprise" && isAnnualContract) {
    return "Overage fee: $0.00";
  }

  const fee = overageUnits * OVERAGE_RATE[planTier];

  const finalFee =
    accountStatus === "past_due" ? Math.max(fee, PAST_DUE_MINIMUM_FEE) : fee;

  return `Overage fee: $${finalFee.toFixed(2)}`;
}

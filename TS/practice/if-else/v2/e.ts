type OverageInputs = {
  planTier: "starter" | "pro" | "enterprise";
  overageUnits: number;
  accountStatus: "trial" | "active" | "past_due";
  isAnnualContract: boolean;
};

const feeMultiplier: Record<string, number> = {
  starter: 2,
  pro: 1.25,
  enterprise: 0.75,
};

function calculateOverageFee({
  planTier,
  overageUnits,
  accountStatus,
  isAnnualContract,
}: OverageInputs): string {
  if (accountStatus === "trial") {
    return "Overage fee: $0.00";
  }

  if (planTier === "enterprise" && isAnnualContract) {
    return "Overage fee: $0.00";
  }

  const minFee: number = 40;

  const fee = overageUnits * (feeMultiplier[planTier] ?? 0);

  const finalFee = accountStatus === "past_due" ? Math.max(fee, minFee) : fee;

  return `Overage fee: $${finalFee.toFixed(2)}`;
}

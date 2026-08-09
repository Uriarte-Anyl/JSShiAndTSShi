type CancellationFeeInput = {
  roomRate: number;
  daysBeforeCheckIn: number;
  rateType: "flexible" | "non-refundable";
  loyaltyTier: "none" | "gold" | "platinum";
};

function calculateCancellationFee({
  roomRate,
  daysBeforeCheckIn,
  rateType,
  loyaltyTier,
}: CancellationFeeInput): string {
  if (loyaltyTier === "platinum") {
    return "Cancellation fee: $0.00";
  }

  let fee: number;

  if (rateType === "non-refundable") {
    fee = roomRate;
  } else if (daysBeforeCheckIn >= 7) {
    fee = 0;
  } else if (daysBeforeCheckIn >= 2) {
    fee = roomRate * 0.3;
  } else {
    fee = roomRate * 0.75;
  }

  if (loyaltyTier === "gold") {
    fee *= 0.8;
  }

  return `Cancellation fee: $${fee.toFixed(2)}`;
}

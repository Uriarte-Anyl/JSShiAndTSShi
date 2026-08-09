//Hotel reservation cancellation fee calculator

type CancellationFeeSpecs = {
  roomRate: number;
  daysBeforeCheckIn: number;
  rateType: "flexible" | "non-Refundable";
  loyaltyTier: "none" | "gold" | "platinum";
};

function calculateCancellationFee({
  roomRate,
  daysBeforeCheckIn,
  rateType,
  loyaltyTier,
}: CancellationFeeSpecs): string {
  let cancellationFeePrice = roomRate;
  if (loyaltyTier === "platinum") {
    cancellationFeePrice = 0;
  }

  if (loyaltyTier !== "platinum") {
    if (rateType === "non-Refundable") {
      cancellationFeePrice;
    } else if (rateType === "flexible") {
      if (daysBeforeCheckIn >= 7) {
        cancellationFeePrice = 0;
      } else if (daysBeforeCheckIn >= 2 && daysBeforeCheckIn < 7) {
        cancellationFeePrice *= 0.3;
      } else if (daysBeforeCheckIn < 2) {
        cancellationFeePrice *= 0.75;
      }
    }

    if (loyaltyTier === "gold") {
      cancellationFeePrice *= 0.2;
    }
  }

  return `Cancellation fee: $${cancellationFeePrice.toFixed(2)}`;
}

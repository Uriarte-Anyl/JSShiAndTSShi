// Flight change fee
type AirlineFeeInput = {
  fareClass: "basic" | "standard" | "premium";
  daysBeforeDeparture: number;
  eliteStatus: "none" | "silver" | "gold";
  isAirlineInitiatedChange: boolean;
};

function calculateChangeFee({
  fareClass,
  daysBeforeDeparture,
  eliteStatus,
  isAirlineInitiatedChange,
}: AirlineFeeInput): string {
  let fee: number = 0;
  const COMPOUND_WAIVER =
    fareClass === "premium" &&
    eliteStatus === "gold" &&
    daysBeforeDeparture < 3;

  if (isAirlineInitiatedChange) return "Change fee: $0.00";
  if (fareClass === "basic") return "Change fee: $75.00";
  if (COMPOUND_WAIVER) return "Change fee: $0.00";

  if (fareClass === "standard" || fareClass === "premium") {
    if (daysBeforeDeparture >= 14) {
      fee;
    } else if (daysBeforeDeparture >= 3) {
      fee = 60;
    } else {
      fee = 120;
    }
  }

  if (eliteStatus === "gold") {
    fee *= 0.5;
  } else if (eliteStatus === "silver") {
    fee *= 0.75;
  }

  return `Change fee: $${fee.toFixed(2)}`;
}

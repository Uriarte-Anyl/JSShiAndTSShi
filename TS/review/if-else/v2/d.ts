type ChangeFeeRequest = {
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
}: ChangeFeeRequest): string {
  if (isAirlineInitiatedChange) {
    return "Change fee: $0.00";
  }

  if (fareClass === "basic") {
    return "Change fee: $75.00";
  }

  const isCompoundWaiverEligible =
    fareClass === "premium" &&
    eliteStatus === "gold" &&
    daysBeforeDeparture < 3;

  if (isCompoundWaiverEligible) {
    return "Change fee: $0.00";
  }

  let fee: number;

  if (daysBeforeDeparture >= 14) {
    fee = 0;
  } else if (daysBeforeDeparture >= 3) {
    fee = 60;
  } else {
    fee = 120;
  }

  if (eliteStatus === "gold") {
    fee *= 0.5;
  } else if (eliteStatus === "silver") {
    fee *= 0.75;
  }

  return `Change fee: $${fee.toFixed(2)}`;
}

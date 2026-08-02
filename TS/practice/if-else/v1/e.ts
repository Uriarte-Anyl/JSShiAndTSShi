//I
function getChargeMessage(batteryPercent: number): string {
  let chargeNeeded = Math.round((100 - batteryPercent) * 100) / 100;
  return batteryPercent >= 80
    ? "Battery sufficiently charged!"
    : `Charge ${chargeNeeded}% more to reach full readiness`;
}

//II
function getSpeedTier(mbps: number): string {
  const mbpsDecimal = Math.round(mbps * 10) / 10;
  if (mbpsDecimal > 100) {
    return "Fiber-fast";
  } else if (mbpsDecimal >= 50 && mbpsDecimal <= 99) {
    return "Broadband";
  } else if (mbpsDecimal >= 25 && mbpsDecimal <= 49) {
    return "Standard";
  } else if (mbpsDecimal < 25 && mbpsDecimal > 0) {
    return "Basic";
  } else {
    return "Invalid speed";
  }
}

//III
interface FeeRegulation {
  hoursParked: number;
  isWeekend: boolean;
  hasValidation: boolean;
  vehicleType: string;
}
function calculateParkingFee({
  hoursParked,
  isWeekend,
  hasValidation,
  vehicleType,
}: FeeRegulation): number {
  let baseFee = 3 + 2 * hoursParked;
  let weekendDiscount = Math.round(baseFee * 0.8 * 100) / 100;

  if (baseFee < 2 && weekendDiscount < 2) {
    return 0;
  }

  if (vehicleType !== "motorcycle" && vehicleType !== "car") {
    return 0;
  }

  if (vehicleType === "motorcycle") {
    return 5;
  }

  if (isWeekend) {
    if (hasValidation && weekendDiscount > 10) {
      return weekendDiscount - 4;
    }
    return weekendDiscount;
  }

  return baseFee;
}

//I
function getShippingMessage(cartTotal: number): string {
  const isInputValid = Number.isInteger(cartTotal) && cartTotal > 0;
  const itemInCart: number = 50;

  if (!isInputValid) return "Invalid input";
  return cartTotal >= itemInCart
    ? "Free shipping!"
    : `You need $${itemInCart - cartTotal} more for free shipping`;
}

//II
function getLetterGrade(score: number): string {
  const isInputValid = Number.isInteger(score);

  if (!isInputValid) return "Invalid input";
  if (score < 0 || score > 100) return "Invalid score";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

//III
function calculateFare(
  distanceKm: number,
  isPeakHour: boolean,
  passengerAge: number,
  hasPromocode: boolean,
): number | string {
  const neverZero = distanceKm > 0 && passengerAge > 0;
  const isInputValid =
    Number.isInteger(distanceKm) && Number.isInteger(passengerAge) && neverZero;
  const discount = isPeakHour && hasPromocode && distanceKm >= 20;
  const baseFare = (250 + 120 * distanceKm) / 100;
  const discountFormula = baseFare * 1.5 - 5;
  const peakHourFormula = baseFare * 1.5;

  if (!isInputValid) return "Invalid input";
  if (passengerAge <= 5) return 0;
  if (discount) return discountFormula;
  if (isPeakHour) return peakHourFormula;
  return baseFare;
}

console.log(getShippingMessage(50));
console.log(getLetterGrade(90));
console.log(calculateFare(20, false, 17, true));

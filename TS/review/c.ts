//I
const FREE_SHIPPING_THRESHOLD = 50;

function getShippingMessage(cartTotal: number): string {
  if (cartTotal >= FREE_SHIPPING_THRESHOLD) {
    return "Free shipping";
  } else {
    const amountNeeded = Math.round(
      ((FREE_SHIPPING_THRESHOLD - cartTotal) * 100) / 100,
    );
    return `You need $${amountNeeded} more for free shipping.`;
  }
}

//II
function getLetterGrade(score: number): string {
  const isValidScore =
    typeof score === "number" &&
    !Number.isNaN(score) &&
    score >= 0 &&
    score <= 100;

  if (!isValidScore) {
    return "Invalid score";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

//III
interface FareParams {
  distanceKm: number;
  isPeakHour: boolean;
  passengerAge: number;
  hasPromoCode: boolean;
}

function calculateFare({
  distanceKm,
  isPeakHour,
  passengerAge,
  hasPromoCode,
}: FareParams): number {
  let fare = 2.5 + 1.2 * distanceKm;

  if (passengerAge < 5) {
    return 0;
  }

  if (isPeakHour) {
    fare *= 1.5;
  }

  if (hasPromoCode && fare > 20) {
    fare -= 5;
  }

  if (fare < 0) {
    fare = 0;
  }

  return Math.round(fare * 100) / 100;
}

console.log(getShippingMessage(18.99));
console.log(getLetterGrade(90));
console.log(
  calculateFare({
    distanceKm: 20,
    isPeakHour: true,
    passengerAge: 30,
    hasPromoCode: true,
  }),
);

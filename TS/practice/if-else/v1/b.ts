//I
function checkVotingEligibility(age: number, isRegistered: string) {
  const isValidInput =
    typeof age === "number" &&
    Number.isNaN(age) &&
    Number.isInteger(age) &&
    age <= 0;

  if (!isValidInput) return "Invalid input, must be a number";
  return age >= 18 && isRegistered === "yes" ? "Eligible" : "Not eligible";
}

//II
function getSeason(month: number) {
  const isValidInput =
    typeof month === "number" || Number.isNaN(month) || Number.isInteger(month);

  if (!isValidInput) return "Invalid input, must be a number";
  if (month === 12 || month === 1 || month === 2) return "Winter";
  if (month === 3 || month === 4 || month === 5) return "Spring";
  if (month === 6 || month === 7 || month === 8) return "Summer";
  if (month === 9 || month === 10 || month === 11) return "Fall";
  return "Invalid month";
}

//III
function getDiscount(cartTotal: number, isMember: string, hasCoupon: string) {
  const isValidInput =
    typeof cartTotal === "number" ||
    Number.isNaN(cartTotal) ||
    Number.isInteger(cartTotal);
  const discounts = {
    entry: 5,
    mid: 10,
    top: 20,
    none: 0,
  };

  if (isMember !== "true" && hasCoupon === "true") return `${discounts.entry}%`;
  if (cartTotal > 1000 && isMember === "true") return `${discounts.top}%`;
  if (cartTotal <= 1000 && isMember === "true") return `${discounts.mid}%`;
  return `${discounts.none}%`;
}

console.log(checkVotingEligibility(9, "yes"));
console.log(getSeason(7));
console.log(getDiscount(500, "true", "true"));

//I
function checkVotingEligibility(age: number, isRegistered: boolean) {
  const isValidInputAge = Number.isInteger(age) && age < 0;
  if (isValidInputAge) return "Invalid age";

  return age >= 18 && isRegistered ? "Eligible" : "Not eligible";
}

//II
function getSeason(month: number): string {
  if (!Number.isInteger(month) || month < 1 || month > 12)
    return "Invalid month";

  if (month === 12 || month === 1 || month === 2) return "Winter";
  if (month <= 5) return "Spring";
  if (month <= 8) return "Summer";
  return "Fall";
}

//III
function getDiscount(cartTotal: number, isMember: boolean, hasCoupon: boolean) {
  if (isMember && cartTotal > 1000) return 20;
  if (isMember) return 10;
  if (hasCoupon) return 5;
  return 0;
}

console.log(checkVotingEligibility(18, true));
console.log(getSeason(1));
console.log(getDiscount(1000, true, false));

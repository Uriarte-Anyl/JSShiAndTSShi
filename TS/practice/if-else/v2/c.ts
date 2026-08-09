//Restaurant delivery fee

type DeliveryRequirements = {
  orderTotal: number;
  distanceMiles: number;
  isSurgeTime: boolean;
  isLoyaltyMember: boolean;
};

function calculateDeliveryFee({
  orderTotal,
  distanceMiles,
  isSurgeTime,
  isLoyaltyMember,
}: DeliveryRequirements): string {
  let fee: number = 0;

  if (isSurgeTime) {
    return "Delivery fee: $12.00";
  }

  if (orderTotal >= 50) {
    return "Delivery fee: $0.00";
  }

  if (distanceMiles <= 2) {
    fee = 3;
  } else if (distanceMiles <= 5) {
    fee = 5.5;
  } else {
    fee = 8;
  }

  if (isLoyaltyMember) {
    fee *= 0.9;
  }

  return `Delivery fee: $${fee.toFixed(2)}`;
}

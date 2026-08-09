//I
function getDiscount(isMember: boolean, purchaseAmount: number): number {
  if (isMember && purchaseAmount >= 100) return 20;
  if (isMember) return 10;
  return 0;
}

//II
function shippingCost(weight: number, isExpress: boolean): number {
  if (weight <= 5) {
    return isExpress ? 15 : 8;
  }

  return isExpress ? 25 : 15;
}

//III
function loginMessage(
  username: string,
  password: string,
  isLocked: boolean,
): string {
  if (isLocked) {
    return "Account locked";
  }
  if (username === "admin" && password === "12345") {
    return "Login successful";
  }
  return "Invalid credentials";
}

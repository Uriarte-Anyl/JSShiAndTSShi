//I
function getDiscount(isMember: boolean, purchaseAmount: number): number {
  if (isMember && purchaseAmount >= 100) return 20;
  if (isMember) return 10;
  return 0;
}

//II
function shippingCost(weight: number, isExpress: boolean): number {
  if (isExpress) {
    if (weight <= 5) {
      return 15;
    }

    if (weight > 5) {
      return 25;
    }
  }

  if (!isExpress) {
    if (weight <= 5 && weight > 0) {
      return 8;
    }
    if (weight > 5) {
      return 15;
    }
  }

  return 0;
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
    return "Login sucessful";
  }
  return "Invalid credentials";
}

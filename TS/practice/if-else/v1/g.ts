function ageCategory(age: number): string {
  if (age < 13) return "Child";
  if (age < 20) return "Teenager";
  return "Adult";
}

function withdraw(balance: number, amount: number): string {
  if (amount <= 0) return "Invalid amount";
  if (amount > balance) return "Insufficient funds";
  return "Withdrawal approved";
}

function thermostat(temperature: number, isVacationMode: boolean): string {
  if (isVacationMode) {
    return "Eco mode";
  }

  if (temperature < 18) {
    return "Heating on";
  }

  if (temperature > 26) {
    return "Cooling on";
  }

  return "Temperature is comfortable";
}

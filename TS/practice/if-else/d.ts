//I
function getTicketType(age: number): string {
  return age < 12 ? "Child" : "Adult";
}

//II
function getDeliveryFee(orderTotal: number): number {
  if (orderTotal <= 0) {
    return -1;
  } else if (orderTotal >= 40) {
    return 0;
  } else if (orderTotal < 15) {
    return 6;
  } else {
    return 3;
  }
}

//III
interface applicant {
  creditScore: number;
  annualIncome: number;
  hasBankruptcy: boolean;
  employmentYears: number;
}

function checkLoanEligibility({
  creditScore,
  annualIncome,
  hasBankruptcy,
  employmentYears,
}: applicant): string {
  if (hasBankruptcy) {
    return "Denied: bankruptcy on record";
  }
  if (creditScore < 580) {
    return "Denied: credit score too low";
  }
  if (creditScore >= 580 && creditScore < 670) {
    if (annualIncome >= 40000 && employmentYears >= 2) {
      return "Approved: Standard Rate";
    } else {
      return "Denied: insufficient income or employment history";
    }
  }
  if (creditScore >= 670) {
    if (annualIncome >= 100000) {
      return "Approved: Premium Rate";
    } else {
      return "Approved: Standard Rate";
    }
  }
}

getTicketType(5);
getDeliveryFee(15);

checkLoanEligibility({
  creditScore: 700,
  annualIncome: 120000,
  hasBankruptcy: false,
  employmentYears: 5,
});

checkLoanEligibility({
  creditScore: 600,
  annualIncome: 35000,
  hasBankruptcy: false,
  employmentYears: 3,
});

checkLoanEligibility({
  creditScore: 750,
  annualIncome: 50000,
  hasBankruptcy: true,
  employmentYears: 10,
});

//I
function getTicketType(age: number): string {
  return age < 12 ? "Child" : "Adult";
}

//II
function getDeliveryFree(orderTotal: number): -1 | 0 | 3 | 6 {
  if (orderTotal <= 0) {
    return -1;
  } else if (orderTotal < 15) {
    return 6;
  } else if (orderTotal < 40) {
    return 3;
  } else {
    return 0;
  }
}

//III
interface applicant {
  creditScore: number;
  annualIncome: number;
  hasBunkraptcy: boolean;
  employmentYears: number;
}

function checkLoanEligibility({
  creditScore,
  annualIncome,
  hasBunkraptcy,
  employmentYears,
}: applicant) {
  if (hasBunkraptcy) {
    return "Denied: bankruptcy on record";
  }

  if (creditScore < 580) {
    return "Denied: credit score too low";
  }

  if (creditScore < 670) {
    if (annualIncome >= 40000 && employmentYears >= 2) {
      return " Approved Standard Rate";
    } else {
      return "Denied: insufficient income or employment history";
    }
  } else {
    if (annualIncome >= 100000) {
      return "Approved: Premium rate";
    } else {
      return "Approver: Standard rate";
    }
  }
}

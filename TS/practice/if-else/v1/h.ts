function getSturdyHoursMessage(hoursStudied: number): string {
  let neededHours = Math.round((20 - hoursStudied) * 10) / 10;
  if (hoursStudied >= 20) return "Ready for the exam!";
  return `Study ${neededHours} more hours to be ready`;
}

function getCreditScore(score: number): string {
  if (!Number.isInteger(score)) return "Invalid score";
  if (score < 0 || score >= 850) return "Invalid score";
  if (score > 800) {
    return "Excellent";
  } else if (score >= 740 && score <= 799) {
    return "Very Good";
  } else if (score >= 670 && score <= 739) {
    return "Good";
  } else if (score >= 580 && score <= 669) {
    return "Fair";
  } else {
    return "Poor";
  }
}

//III
interface EventTicketCriteria {
  attendeeType: string;
  isEarlyBird: boolean;
  hasGroupCode: boolean;
  ticketCount: number;
}

function calculateEventTicketPrice({
  attendeeType,
  isEarlyBird,
  hasGroupCode,
  ticketCount,
}: EventTicketCriteria): number {
  let price = 15 + 3 * ticketCount;
  if (attendeeType === "staff") return 0;
  if (isEarlyBird) {
    price *= 0.75;
  }
  if (hasGroupCode && price > 30) {
    price -= 10;
  }
  if (price < 5) {
    price = 5;
  }
  return Math.round(price * 100) / 100;
}

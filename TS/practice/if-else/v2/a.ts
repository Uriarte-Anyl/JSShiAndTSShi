//Concert Ticket Pricing Engine
function calculateTicketPrice(
  age: number,
  isMember: boolean,
  ticketType: "standard" | "vip",
) {
  let standardTicket = 50;
  let vipTicket = 120;
  const standardTicketMinPrice = 20;
  const vipTicketMinPrice = 80;
  let price = 0;

  if (age <= 0) {
    return "Invalid age";
  }

  if (ticketType === "standard") {
    if (isMember) {
      if (age < 12) {
        price = standardTicket * 0.5 * 0.85;
      }

      if (age >= 65) {
        price = (standardTicket - 10) * 0.85;
      }

      if (age >= 12 && age < 65) {
        price = standardTicket * 0.85;
      }
    }

    if (!isMember) {
      if (age < 12) {
        price = standardTicket * 0.5;
      }

      if (age >= 65) {
        price = standardTicket - 10;
      }

      if (age >= 12 && age < 65) {
        price = standardTicket;
      }
    }

    if (price < 20) {
      price = 20;
    }
  }

  if (ticketType === "vip") {
    if (isMember) {
      if (age < 12) {
        price = vipTicket * 0.5 * 0.85;
      }

      if (age >= 65) {
        price = (vipTicket - 10) * 0.85;
      }

      if (age >= 12 && age < 65) {
        price = vipTicket * 0.85;
      }
    }

    if (!isMember) {
      if (age < 12) {
        price = vipTicket * 0.5;
      }

      if (age >= 65) {
        price = vipTicket - 10;
      }

      if (age >= 12 && age < 65) {
        price = vipTicket;
      }
    }

    if (price < 80) {
      price = 80;
    }
  }

  return `Ticket price: $${price.toFixed(2)}`;
}

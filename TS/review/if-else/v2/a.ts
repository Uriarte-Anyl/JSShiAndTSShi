interface TicketRequest {
  age: number;
  isMember: boolean;
  ticketType: "standard" | "vip";
}

const TICKET_CONFIG = {
  standard: { basePrice: 50, minPrice: 20 },
  vip: { basePrice: 120, minPrice: 80 },
} as const;

function calculateTicketPrice({
  age,
  isMember,
  ticketType,
}: TicketRequest): string {
  const { basePrice, minPrice } = TICKET_CONFIG[ticketType];

  let price: number = basePrice;

  if (age < 12) {
    price *= 0.5;
  } else if (age >= 65) {
    price -= 10;
  }

  if (isMember) {
    price *= 0.85;
  }

  price = Math.max(price, minPrice);

  return `Ticket price: $${price.toFixed(2)}`;
}

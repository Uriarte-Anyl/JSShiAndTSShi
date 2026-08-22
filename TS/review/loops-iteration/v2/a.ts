function calculateTotalSales(dailySales: number[]): number {
  let total = 0;
  for (let i = 0; i < dailySales.length; i++) {
    if (dailySales[i] >= 0) {
      total += dailySales[i];
    }
  }
  return total;
}

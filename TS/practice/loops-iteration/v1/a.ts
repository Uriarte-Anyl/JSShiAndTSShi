//I
function countMultiples(limit: number, divisor: number): number {
  for (let i = divisor; i < limit; i++) {
    return i * divisor;
  }
}

//II
function compressString(text: string): string {
  for (const char of text) {
    return char;
  }
}

//III
function findLongestIncreasingStreak(numbers: number[]): number {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.length > i) {
      return i;
    }
  }
}
//I fumbled so hard man

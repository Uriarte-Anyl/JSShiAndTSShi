//I
function countMultiples(limit: number, divisor: number): number {
  let count = 0;

  for (let i = 1; i <= limit; i++) {
    if (i % divisor === 0) {
      count++;
    }
  }

  return count;
}

//II
function compressString(text: string): string {
  if (text === "") return "";

  let result = "";
  let current = text[0];
  let count = 1;

  for (let i = 1; i < text.length; i++) {
    if (text[i] === current) {
      count++;
    } else {
      result += current + count;
      current = text[i];
      count = 1;
    }
  }

  result += current + count;
  return result;
}

//III
function findLongestIncreasingStreak(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }

  let longest = 1;
  let current = 1;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[i - 1]) {
      current++;
    } else {
      current = 1;
    }

    if (current > longest) {
      longest = current;
    }
  }

  return longest;
}

console.log(compressString("aaabbc"));
console.log(compressString("a"));
console.log(findLongestIncreasingStreak([3, 3, 4, 5, 1, 2, 3]));

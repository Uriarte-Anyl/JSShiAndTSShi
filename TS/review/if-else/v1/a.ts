function checkAge(age: number) {
  if (age <= 0 || age >= 120) return "Inaccurate age";
  return age >= 18 ? "Adult" : "Minor";
}

function getGrade(score: number) {
  if (typeof score !== "number" || Number.isNaN(score)) return "Invalid input";
  if (score > 100 || score < 0) return "Inaccurate score";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function classifyTriangle(x: number, y: number, z: number) {
  const isValid = x + y > z && y + z > x && x + z > y;
  if (!isValid) return "Invalid";

  if (x === y && x === z) return "Equilateral";
  if (x === y || y === z || x === z) return "Isosceles";
  return "Scalene";
}

console.log(checkAge(121));
console.log(getGrade(59));
console.log(classifyTriangle(1, 1, 25));

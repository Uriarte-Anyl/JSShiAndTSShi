let a = 18;
let s = 90;
let s1 = 21;
let s2 = 22;
let s3 = 23;
let sums = s1 + s2;

//easy
function checkAge(age) {
  if (age <= 0 || age >= 120) {
    console.log("inaccurate age");
  } else {
    age >= 18 ? console.log("adult") : console.log("minor");
  }
}

checkAge(a);

//medium
function getGrade(score) {
  if (score > 100 || score < 0) {
    console.log("Inaccurate score");
  } else if (score >= 90) {
    console.log("A - Excellent");
  } else if (score >= 80) {
    console.log("B - Very satisfactory");
  } else if (score >= 70) {
    console.log("C - Satisfactory");
  } else if (score >= 60) {
    console.log("D - Good");
  } else if (score < 60) {
    console.log("F - Conditional");
  } else {
    console.log("Score is not a number");
  }
}

getGrade(s);

//hard
function classifyTriangle(sum, x, y, z) {
  if (sum > z) {
    console.log("Invalid");

    if (x === y && y === z && z === x) {
      console.log("Equilateral");
    }
    if (x === y && y === z && z !== x) {
      console.log("Isosceles");
    }
    if (x !== y && y !== z && z !== x) {
      console.log("Scalene");
    }
  }
}

classifyTriangle(sums, s1, s2, s3);

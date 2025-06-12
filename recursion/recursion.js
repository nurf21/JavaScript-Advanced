// Sum all numbers till the given one
// ==================================================

function sumToLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumToRecursive(n) {
  return n === 1 ? 1 : n + sumToRecursive(n - 1);
}

function sumToFormula(n) {
  return n * (n + 1) / 2;
}

console.log(sumToLoop(100));
console.log(sumToRecursive(100));
console.log(sumToFormula(100));

// Calculate factorial
// ==================================================

function factorial(n) {
  // Base case: factorial of 0 or 1 is 1.
  if (n <= 1) {
    return 1;
  }
  // Recursive call: n! = n * (n - 1)!
  return n * factorial(n - 1);
}

console.log(factorial(5));
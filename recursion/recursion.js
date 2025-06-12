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
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

// Fibonacci numbers
// ==================================================

function fib(n) {
  if (n < 2) return n;     // by convention: fib(0)=0, fib(1)=1
  let a = 0, b = 1;        // will hold fib(i-2) and fib(i-1)
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];   // shift window: new fib(i) = old fib(i-1)+fib(i-2)
  }
  return b;
}

// Examples:
console.log(fib(3));
console.log(fib(7));
console.log(fib(77));

// Output a single-linked list
// ==================================================

// 1) The list
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// 2) Iterative print
function printList(list) {
  let node = list;
  while (node) {
    console.log(node.value);
    node = node.next;
  }
}

// 3) Recursive print
function printListRec(list) {
  if (!list) return;
  console.log(list.value);
  printListRec(list.next);
}

// 4) Recursive reverse print
function printReverse(list) {
  if (!list) return;
  printReverse(list.next);
  console.log(list.value);
}

// 5) Demo
console.log("Iterative:");
printList(list);

console.log("Recursive:");
printListRec(list);

console.log("Reverse Recursion:");
printReverse(list);
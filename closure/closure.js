// Sum with closures
// ==================================================

function sum(a) {
  return function (b) {
    return a + b;
  };
}

// Example usage:
console.log(sum(1)(2));
console.log(sum(5)(-1));

// Filter through function
// ==================================================

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

// Example usage:
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));
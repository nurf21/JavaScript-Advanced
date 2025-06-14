// Sum with closures
// ==================================================

const sum = a => b => a + b;

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

// Sort by field
// ==================================================

function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

// Example usage:
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

// Sorting by name:
users.sort(byField('name'));
console.log(users);

// Sorting by age:
users.sort(byField('age'));
console.log(users);

// Army of functions
// ==================================================

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      console.log(i);
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0]();
army[1]();
army[2]();
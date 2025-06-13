// Output every second
// ==================================================

// Variant 1: Using setInterval
function printNumbersInterval(from, to) {
  let current = from;

  console.log(current);                 // show the first value right away

  const timerId = setInterval(() => {
    current += 1;
    console.log(current);

    if (current === to) {
      clearInterval(timerId);           // stop once we’ve hit the upper bound
    }
  }, 1_000);                            // 1 000 ms = 1 s
}

// Example usage:
printNumbersInterval(5, 10);

// Variant 2: Using setTimeout
function printNumbersTimeout(from, to) {
  let current = from;

  function tick() {
    console.log(current);               // log the number

    if (current < to) {                 // schedule next step only if needed
      current += 1;
      setTimeout(tick, 1_000);
    }
  }

  tick();                               // kick off immediately
}

// Example usage:
printNumbersTimeout(5, 10);
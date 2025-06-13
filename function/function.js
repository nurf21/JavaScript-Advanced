// Set and decrease for counter
// ==================================================

// Function object
function makeCounter() {
  // Core callable
  function counter() {
    return counter.count++;   // return THEN ++ (keeps original behaviour)
  }

  // Internal state
  counter.count = 0;

  // Extra controls
  counter.set = value => counter.count = value; // hard-set any value
  counter.decrease = () => counter.count--;

  return counter;
}

/* ---- demo ---- */
const c = makeCounter();

console.log(c());
console.log(c());
c.set(10);
console.log(c());
console.log(c.decrease());
console.log(c());

// Using a closure
function makeCounterClosure() {
  let current = 0;                // private state

  function counter() {
    return current++;             // same “return-then-increment” semantics
  }

  counter.set = value => { current = value; };
  counter.decrease = () => { return current--; };

  return counter;
}

/* ---- demo ---- */
const cClosure = makeCounterClosure();

console.log(cClosure());
console.log(cClosure());
cClosure.set(10);
console.log(cClosure());
console.log(cClosure.decrease());
console.log(cClosure());

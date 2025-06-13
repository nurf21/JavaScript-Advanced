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

// Sum with an arbitrary amount of brackets
// ==================================================

function sum(a) {
  const f = b => sum(a + b);        // keep chaining
  f[Symbol.toPrimitive] = () => a;  // whenever JS needs a number → give a
  return f;
}

console.log(sum(1)(2)(3)(4) == 10);
console.log(Number(sum(10)(-4)(7)));
console.log(`Total: ${sum(2)(3)(4)}`);
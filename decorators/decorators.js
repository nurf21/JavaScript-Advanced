// Spy decorator
// ==================================================

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }
  wrapper.calls = [];
  return wrapper;
}

function work(a, b) {
  console.log(a + b);
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
  console.log('call: ' + args.join(','));
}

// Delaying decorator
// ==================================================

function delay(f, ms) {
  return function (...args) {
    const context = this;
    setTimeout(() => {
      f.apply(context, args);
    }, ms);
  };
}

function f(x) {
  console.log(x);
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test");
f1500("test");

// Debounce decorator
// ==================================================

function debounce(f, ms) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      f.apply(context, args);
    }, ms);
  };
}

function f(message) {
  console.log(message);
}

const debouncedF = debounce(f, 1000);

debouncedF("a");
setTimeout(() => debouncedF("b"), 200);
setTimeout(() => debouncedF("c"), 500);
// After 1000ms from the last call, f("c") will be logged to the console.

// Throttle decorator
// ==================================================

function throttle(f, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper(...args) {
    if (isThrottled) {
      // Always keep the latest arguments and context.
      savedArgs = args;
      savedThis = this;
      return;
    }

    // Call immediately if not throttled.
    f.apply(this, args);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      // If calls were made during throttling, call f with the latest arguments.
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

function update(pointer) {
  console.log("Updating pointer coordinates:", pointer);
}

const throttledUpdate = throttle(update, 100);

// Simulate rapid calls (e.g. on mousemove events).
throttledUpdate({ x: 10, y: 20 });
throttledUpdate({ x: 12, y: 22 });
throttledUpdate({ x: 15, y: 25 });
// Only the first call is executed immediately and, after 100ms, the latest arguments are used.
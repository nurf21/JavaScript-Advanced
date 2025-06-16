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
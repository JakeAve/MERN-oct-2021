const { performance } = require("perf_hooks");
const start = performance.now();
Number.prototype.isPrime = function () {
  for (let i = 2; i < Math.sqrt(this); i += 1) {
    if (this % i === 0) {
      return false;
    }
  }
  return true;
};

let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while (primeCount < 1e6) {
  if (num.isPrime()) {
    primeCount++;
    num += 2;
  } else num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

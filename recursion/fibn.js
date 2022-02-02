const fibonacci = (num) => {
  if (num < 2) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
};

console.time("fib");
console.log(fibonacci(40));
console.timeEnd("fib");

const fibonacci2 = (num, memo = {}) => {
  if (memo[num]) return memo[num];
  if (num < 2) return num;

  return (memo[num] = fibonacci2(num - 1, memo) + fibonacci2(num - 2, memo));
};

console.time("fib2");
console.log(fibonacci2(40));
console.timeEnd("fib2");

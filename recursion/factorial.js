const factorial = (n) => {
  let num = n;
  if (n === 0) return 1;
  for (let i = 0; i < n; i++) num = n * factorial(n - 1);
  return num;
};

console.time("factorial");
const _11 = factorial(11);
console.timeEnd("factorial");
console.table({ _11 });

const factorial2 = (n, memo = {}) => {
  if (memo[n]) return memo[n];
  if (n === 0) return 1;
  for (let i = 0; i < n; i++) memo[n] = n * factorial2(n - 1, memo);
  return memo[n];
};

console.time("factorial2");
const _11B = factorial2(11);
console.timeEnd("factorial2");
console.table({ _11B });

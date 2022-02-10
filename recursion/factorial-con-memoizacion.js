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

/* memo es un objecto que tiene resultados previos
{
  '1': 1,
  '2': 2,
  '3': 6,
  '4': 24,
  '5': 120,
  '6': 720,
  '7': 5040,
  '8': 40320,
  '9': 362880,
  '10': 3628800,
  '11': 39916800
}
*/

console.time("factorial2");
const _11B = factorial2(11);
console.timeEnd("factorial2");
console.table({ _11B });

const add = (num1, num2) => {
  const str1 = num1.toString().split("").reverse();
  const str2 = num2.toString().split("").reverse();

  let gr, pq;
  if (str1.length > str2.length) {
    gr = str1;
    pq = str2;
  } else {
    gr = str2;
    pq = str1;
  }

  const num = gr.map((val, idx) => {
    const n1 = Number(val) ?? 0;
    const n2 = Number(pq[idx]) || 0;
    console.log({ n1, n2 });
    return n1 + n2;
  });

  return Number(num.reverse().join(""));
};

console.log(add(16, 18));
console.log(add(26, 39));
console.log(add(122, 81));

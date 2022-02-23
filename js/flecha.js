const cuadrar = (n) => n * n;

console.table({ cuadrar4: cuadrar(4) });

const bob = () => ({});

function functionNormal() {
  console.log(this);
}

const functionDeFlecha = () => console.log(this);

functionNormal();
functionDeFlecha();

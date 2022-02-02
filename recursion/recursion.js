const numero = 25;

function numeroCorrecto(adivinacion = 0, adivinacion2 = 0, previas = []) {
  console.log("render");

  if (!previas.includes(adivinacion) && adivinacion === numero) return numero;
  if (!previas.includes(adivinacion2) && adivinacion2 === numero) return numero;

  return numeroCorrecto(adivinacion + 1, adivinacion2 - 1, [
    ...previas,
    adivinacion,
    adivinacion2,
  ]);
}

const res = numeroCorrecto(0, 15);
console.log({ res });

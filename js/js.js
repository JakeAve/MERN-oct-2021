function doSomething(possibleCallback) {
  return new Promise((res) => {
    setTimeout(() => {
      randNum = Math.floor(Math.random() * 10);
      res(randNum);
    }, 1);
  });

  // if (typeof possibleCallback === "function") {
  //   console.log("possibleCallback is a callback!");
  //   possibleCallback(randNum); //podemos invocar el callback!
  // } else {
  //   console.log(
  //     "possibleCallback: ",
  //     possibleCallback,
  //     " is not a callback function."
  //   );
  // }
}

const mostrarNumero = (num) => {
  console.log("yes, I am a callback!");
  console.log(num * 10);
  return num;
};

const otraVez = (num) => num * 99;

doSomething()
  .then((num) => mostrarNumero(num))
  .then((num) => {
    const resultado = otraVez(num) > 200 ? otraVez(num) : null;
    console.log(resultado);
  });
// doSomething("string");

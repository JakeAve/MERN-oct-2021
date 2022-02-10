// Definicion: Una funcion defenida dentro de otra funcion que usa variables solo defenidos dentro de la funcion de afuera, que puede ser ejecutada desde la funcion de afuera
// porque existen?: Tener variables privados

function functionDeAfuera() {
  var outerVariable = 1;

  function funcionDeAdentro(foo) {
    console.log(outerVariable, foo);
  }

  return funcionDeAdentro;
}

const closure = functionDeAfuera();

// closure("este es el variable de foo");

function useSumarIntereses() {
  const tasa = 0.05;

  function sumarIntereses(cantidad) {
    return cantidad * (1 + tasa);
  }

  return sumarIntereses;
}

const closureDeSumar = useSumarIntereses();

const cien = closureDeSumar(100);

// console.table({ cien });

function colores(colorString) {
  const reset = `\u001b[0m`;

  function color(texto) {
    console.log(colorString + texto + reset);
  }

  return color;
}

const consoleExito = colores(`\u001b[32;1m`);

consoleExito("Èxito!!");

const consoleError = colores(`\u001b[31;1m`);

consoleError("Error!!");

const consoleWarn = colores(`\u001b[33;1m`);

consoleWarn("Warn");

// Black: \u001b[30m
// Red: \u001b[31m
// Green: \u001b[32m
// Yellow: \u001b[33m
// Blue: \u001b[34m
// Magenta: \u001b[35m
// Cyan: \u001b[36m
// White: \u001b[37m
// Bright Black: \u001b[30;1m
// Bright Red: \u001b[31;1m
// Bright Green: \u001b[32;1m
// Bright Yellow: \u001b[33;1m
// Bright Blue: \u001b[34;1m
// Bright Magenta: \u001b[35;1m
// Bright Cyan: \u001b[36;1m
// Bright White: \u001b[37;1m
// Reset: \u001b[0m

var counter = (function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

counter.privateCounter = 2;

consoleWarn(counter.privateCounter);
consoleExito(counter.value());
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();

consoleExito(counter.value());

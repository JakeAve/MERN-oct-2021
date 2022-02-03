function functionDeAfuera() {
  var outerVariable = 1;

  function funcionDeAdentro() {
    console.log(outerVariable);
  }

  funcionDeAdentro();
}

const closure = functionDeAfuera();

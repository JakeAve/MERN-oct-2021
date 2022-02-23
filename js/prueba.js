const hola = "hola";

saludar();

function saludar() {
  const nombre = "Juan";
  console.log(`${hola} ${nombre}`);
  const determinarIdioma = () => {
    if (hola === "hola") console.log(algoGlobal);
  };
  determinarIdioma();
}

const despedir = () => {
  const nombre = "Maria";
  let msj = nombre;
  for (let i = 0; i < 3; i++) {
    const despido = "buenas noches";
    msj += ` ${despido}`;
  }
  console.log(msj);
};

saludar();

despedir();

var algoGlobal = "algo";

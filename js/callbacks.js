const ninja = "Libby";

// argumentos - valores que pasamos a funciones

const functionDeCallback = () => console.log(ninja);

setTimeout(functionDeCallback, 2000); // accepta una función y un número

setTimeout(() => console.log("funcion anonima"), 1000);

const hacerUnCalculo = (magia) => `El sensei ${ninja} ${magia}`; // auto-return un string

const impirimNombreDeNinja = (puedeSerFuncion) => {
  // puedeSerFuncion puede ser un string o una función de devuelve un string
  const unVariableDeMagia = "la magia";
  let nombre;
  if (typeof puedeSerFuncion === "function")
    nombre = puedeSerFuncion(unVariableDeMagia);
  else nombre = puedeSerFuncion;
  return nombre; // devolver un string
};

const nombre1 /* guardar el valor devuelto por imprimirNombreDeNinja(ninja) */ =
  impirimNombreDeNinja(ninja);
const nombre2 = impirimNombreDeNinja((m) => hacerUnCalculo(m));

console.table({ nombre1, nombre2 });

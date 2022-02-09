class Archivo {
  #_text;
  constructor(texto) {
    this.#_text = texto;
    this.ediciones = 0;
  }

  get text() {
    return this.#_text;
  }

  set text(argumento) {
    this.ediciones++;
    this.#_text = argumento;
  }
}

const ar1 = new Archivo("Foo");

ar1.text = "Nuevo cambio";

ar1.text = "otro text que hay";

console.log(ar1.text);

console.table(ar1);

// Booleans

const podriaSerString = "un string";
const stringVacio = "";

console.log({
  boolean: !podriaSerString,
  boolean2: !!podriaSerString,
  "string vacio !": !stringVacio,
  "string vacio !!": !!stringVacio,
});

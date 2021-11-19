class Carro {
  millas = 0;

  constructor(manufactor, modelo, año, color) {
    if (!manufactor || !modelo || !año || !color)
      throw new Error("El carro necesita un manufactor, modelo, año y color");

    this.manufactor = manufactor;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
  }

  pitar() {
    console.log("beep");
  }

  manejar(millas = 1) {
    this.millas += millas;

    return millas;
  }
}

const carro1 = new Carro("Toyota", "Camry", 2015, "rojo");
carro1.manejar(100);

carro1.pitar();

console.log(carro1);

class M5 extends Carro {
  constructor(año, color) {
    super("BMW", "M5", año, color);
  }

  volar(millas = 1) {
    const _millas = super.manejar(millas * 3);
    return _millas;
  }
}

const m5Naranjo = new M5(2021, "naranjo");

m5Naranjo.volar();
console.log(m5Naranjo);

class Boxter extends Carro {
  isTechoAbierto = false;
  constructor(año, color) {
    super("Porche", "Boxter", año, color);
  }

  abrirTecho() {
    this.isTechoAbierto = true;
  }

  cerrarTecho() {
    this.isTechoAbierto = false;
  }
}

const yellowBoxter = new Boxter(2010, "Yellow");

yellowBoxter.abrirTecho();

console.log(yellowBoxter);

class Ninja {
  salud = 10;
  velocidad = 3;
  fuerza = 3;

  constructor(nombre) {
    this.nombre = nombre;
  }

  drinkSake() {
    //   this.salud = this.salud + 10
    this.salud += 10;
  }

  sayName() {
    console.log(`Mi nombre de 🥷 es ${this.nombre}`);
  }

  showStats() {
    const stats = {
      salud: this.salud,
      fuerza: this.fuerza,
      velocidad: this.velocidad,
      nombre: this.nombre,
    };
    console.table(stats);
    return stats;
  }
}

// const ninja1 = new Ninja("Daniel");
// const ninja2 = new Ninja("Daniel's Son");

// ninja1.drinkSake();
// ninja1.drinkSake();

// ninja1.sayName();
// ninja2.sayName();

// ninja1.showStats();
// ninja2.showStats();

// console.log({ ninja1, ninja2 });

module.exports = Ninja;

class Ninja {
  constructor(nombre, salud = 10, velocidad = 3, fuerza = 3) {
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = velocidad;
    this.fuerza = fuerza;
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

// const pedro = new Ninja("Pedro");
// const maria = new Ninja("Maria");

// maria.drinkSake();
// console.table({ pedro, maria });
// pedro.sayName();

// pedro.showStats();
module.exports = Ninja;

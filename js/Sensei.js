const Ninja = require("./Ninja");

class Sensei extends Ninja {
  constructor(nombre) {
    super(nombre);
    this.salud = 200;
    this.velocidad = 10;
    this.fuerza = 10;
    this.sabiduria = 10;
  }

  speakWisdom() {
    //   this.drinkSake() va a hacer lo mismo porque no hemos redefenido drinkSake en Sensei
    super.drinkSake();
    console.log(
      "Es mejor permanecer en silencio y que piensen que eres un tonto, que hablar y despejar toda duda."
    );
  }
}

const mrMiyagui = new Sensei("Mr. Miyagui");

mrMiyagui.speakWisdom();
mrMiyagui.showStats();

console.table({ mrMiyagui });

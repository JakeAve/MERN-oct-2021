const Ninja = require("./Ninja.js");

class Sensei extends Ninja {
  constructor(nombre) {
    super(nombre, 200, 10, 10);
  }

  speakWisdom() {
    // this.drinkSake();
    super.drinkSake();
    console.log(
      "Es mejor permanecer en silencio y que piensen que eres un tonto, que hablar y despejar toda duda."
    );
  }
}

const mrMiyagui = new Sensei("Mr. Miyagui");

mrMiyagui.speakWisdom();

mrMiyagui.showStats();

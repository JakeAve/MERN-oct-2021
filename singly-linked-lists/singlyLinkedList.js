class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// const cabeza = new Node("foo");

// console.table({ cabeza });

class Lista {
  constructor() {
    this._cabeza = null;
  }

  addToFront(value) {
    const node = new Node(value, this._cabeza);
    this.node;
    this._cabeza = node;
    return this;
  }

  mostrar() {
    let temp = this._cabeza;
    const arr = [];
    while (temp) {
      arr.push(temp.value);
      temp = temp.next;
    }

    console.table(arr);
  }

  contains(value) {
    let resultado = false;
    let temp = this._cabeza;
    while (temp) {
      if (temp.value === value) resultado = true;
      temp = temp.next;
    }
    return resultado;
  }

  get length() {
    let cuenta = 0;
    let temp = this._cabeza;
    while (temp) {
      cuenta++;
      temp = temp.next;
    }
    return cuenta;
  }

  min() {
    let min = this._cabeza?.value;
    let temp = this._cabeza;
    while (temp) {
      if (temp.value < min) min = temp.value;
      temp = temp.next;
    }
    return min;
  }

  max() {
    let max = this._cabeza?.value;
    let temp = this._cabeza;
    while (temp) {
      if (temp.value > max) max = temp.value;
      temp = temp.next;
    }
    return max;
  }

  promedio() {
    let sumo = 0;
    let temp = this._cabeza;
    while (temp) {
      sumo += temp.value;
      temp = temp.next;
    }
    return sumo / this.length;
  }

  get cola() {
    let temp = this._cabeza;
    let resultado;
    while (temp) {
      resultado = temp;
      temp = temp.next;
    }
    return resultado.value;
  }

  get cabeza() {
    return this._cabeza?.value;
  }

  addToBack(value) {
    const node = new Node(value);
    let temp = this._cabeza;
    let ultimo;
    while (temp) {
      ultimo = temp;
      temp = temp.next;
    }
    ultimo.next = node;
    return this;
  }

  removeFromBack() {
    let temp = this._cabeza;
    let penultimo;
    while (temp.next) {
      penultimo = temp;
      temp = temp.next;
    }
    penultimo.next = null;
    return this;
  }
}

const sll = new Lista();

sll.addToFront(10);
sll.addToFront(2);
sll.addToFront(20);
sll.addToFront(30);
sll.addToBack(27);
sll.mostrar();

const contains5 = sll.contains(5);
const contains20 = sll.contains(20);

const length = sll.length;
const min = sll.min();
const max = sll.max();
const promedio = sll.promedio();
const cabeza = sll.cabeza;
const cola = sll.cola;

const otraCola = sll.removeFromBack().cola;

console.table({
  contains5,
  contains20,
  length,
  min,
  max,
  promedio,
  cabeza,
  cola,
  otraCola,
});

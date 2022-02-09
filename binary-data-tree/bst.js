class BTNode {
  constructor(id, value) {
    this.val = value;
    this.id = id;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  agregar(nodo) {
    if (this.root === null) {
      this.root = nodo;
      return;
    }
    BST.colocar(nodo, this.root);
  }

  static colocar(nuevoNodo, nodoExistiente) {
    if (nuevoNodo.id < nodoExistiente.id) {
      if (nodoExistiente.left === null) nodoExistiente.left = nuevoNodo;
      else BST.colocar(nuevoNodo, nodoExistiente.left);
    } else if (nuevoNodo.id >= nodoExistiente.id) {
      if (nodoExistiente.right === null) nodoExistiente.right = nuevoNodo;
      else BST.colocar(nuevoNodo, nodoExistiente.right);
    }
  }

  contiene(id) {
    return BST.contieneEstatico(id, this.root);
  }

  static contieneEstatico(id, nodo) {
    if (nodo === null) return false;
    if (id === nodo.id) return true;
    if (id < nodo.id) return BST.contieneEstatico(id, nodo.left);
    if (id >= nodo.id) return BST.contieneEstatico(id, nodo.right);
  }

  display() {
    const arr = [this.root];
    BST.repasarTodos(this.root, arr);
    console.table(arr);
  }

  estaVacio() {
    return !this.root;
  }

  max() {
    let temp = this.root;
    while (temp.right !== null) temp = temp.right;
    return temp;
  }

  min() {
    let temp = this.root;
    while (temp.left !== null) temp = temp.left;
    return temp;
  }

  static repasarTodos(nodo, arr) {
    if (nodo.left) {
      arr.push(nodo.left);
      BST.repasarTodos(nodo.left, arr);
    }
    if (nodo.right) {
      arr.push(nodo.right);
      BST.repasarTodos(nodo.right, arr);
    }
  }

  get tamaño() {
    this.count = 0;
    // let num = 0; TODO: // fix num
    if (this.root) {
      this.count = 1;
      //   num = 1;
      /* num += */ this.contarElementosDebajo(this.root /* ++num*/);
    }
    return this.count;
    // return num;
  }

  contarElementosDebajo(nodo /*num*/) {
    // this.count = num;
    if (nodo.left) this.contarElementosDebajo(nodo.left, ++this.count);
    if (nodo.right) this.contarElementosDebajo(nodo.right, ++this.count);

    // return num;
  }
}

const bst = new BST();

const nodos = [
  new BTNode(50, "foo"),
  new BTNode(49, "foo 2"),
  new BTNode(25, "foo 9"),
  new BTNode(52, "foo 4"),
  new BTNode(51, "bar"),
  new BTNode(48, "foo 3"),
  new BTNode(45, "foo 6"),
  new BTNode(50, "foo 5"),
  new BTNode(105, "foo 7"),
  new BTNode(35, "foo 8"),
];

/*


                50
            49       51
        48         50       52
                                null


*/

nodos.forEach((n) => bst.agregar(n));

bst.display();
// bst.contiene(49);
// bst.contiene(52);
const contiene53 = bst.contiene(53);
const min = bst.min();
const max = bst.max();
const tamaño = bst.tamaño;
const estaVacio = bst.estaVacio();

const bst2 = new BST();
const estaVacio2 = bst2.estaVacio();

const podriaSerString = "un string";
const stringVacio = "";

console.table({
  bst,
  root: bst.root,
  contiene53,
  min,
  max,
  tamaño,
  estaVacio,
  estaVacio2,
});

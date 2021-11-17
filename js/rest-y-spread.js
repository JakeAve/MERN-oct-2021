const animals = ["horse", "dog", "fish", "cat", "bird"];
const [firstAnimal, secondAnimal, ...restoDeArr] = animals;

// console.log(firstAnimal, secondAnimal);

// console.log(restoDeArr);

const bob = {
  firstName: "Bob",
  lastName: "Marley",
  email: "bob@marley.com",
  password: "sekureP@ssw0rd9",
  username: "barley",
  addresses: [
    {
      address: "1600 Pennsylvania Avenue",
      city: "Washington, D.C.",
      zipcode: "20500",
    },
    {
      address: "221B Baker St.",
      city: "London",
      zipcode: "WC2N 5DU",
    },
  ],
  createdAt: 1543945177623,
};

const { firstName, lastName, ...cualquiercosa } = bob;

// console.log(cualquiercosa);

const bobModificado = {
  nombre: bob.firstName,
  apellido: bob.lastName,
  ...bob,
  email: "bob@marley.org",
};
// console.log(bobModificado);
const saludar = ({ nombre, apellido }) =>
  `Hola, ${nombre} ${apellido}! Bienvenido a mi página web.`;

// console.log(saludar(bobModificado));

const arrA = [1, 2, 3, 4];

const arrB = [5, 6, 7, 8];

const arrCombinado = [...arrA, arrB];

// console.log(arrCombinado);

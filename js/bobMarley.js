const person = {
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

const saludar = (persona) => {
  return `Hola, ${persona.firstName} ${persona.lastName}! Bienvenido a mi página web.`;
};

const displayDireccion = ({ addresses: [, { address, city, zipcode }] }) => {
  return `Tu dirección es ${address}, ${city}\n${zipcode}`;
};

// const saludoDeBobMarley = saludar(person);
// const dirDeBob = displayDireccion(person);
// console.log(saludoDeBobMarley);
// console.log(dirDeBob);

const obj = Object.freeze({
  name: "Pedro",
  apellido: "Pascal",
  "date-of-birth": new Date("july 23,1985"),
});

obj.apellido = "Mandalorion";

console.log({ obj });
console.log(obj["date-of-birth"]);

const arrFalso = {
  0: "a",
  1: "b",
  2: "c",
};
console.log(arrFalso[1]);

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];

const resultadoDeForEach = groceries.forEach((item) => `<li>${item}</li>`);
console.log({ resultadoDeForEach });

const groceryList = groceries.map((item) => `<li>${item}</li>`);
console.log({ groceryList });

const oFoods = groceries.filter((item) => item.includes("o"));

const primerElementoConE = groceries.find((item) => item.includes("e"));
console.log({ primerElementoConE });

const primerElementoConZ = groceries.find((item) => item.includes("z"));
console.log({ primerElementoConZ });

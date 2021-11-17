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

const saludoDeBobMarley = saludar(person);
const dirDeBob = displayDireccion(person);
console.log(saludoDeBobMarley);
console.log(dirDeBob);

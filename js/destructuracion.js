const person = {
  firstName: "Bob",
  lastName: "Marley",
  email: "bob@marley.com",
  password: "sekureP@ssw0rd9",
  username: "barley",
  createdAt: 1543945177623,
  direccion: {
    ciudad: "Viña del Mar",
    provincia: "Valparaiso",
    numero: "123 calle independencia",
  },
};

const animals = ["horse", "dog", "fish", "cat", "bird"];

// console.log(person[0]);

// console.log(animals["1"]);

const imprimirDir = (direccion) => {
  const { ciudad, provincia, numero } = direccion;
  return `${numero}, ${ciudad}, ${provincia}`;
};

const saludar = (usuario) => {
  const phoneNumber = "3495658785";

  const {
    direccion,
    direccion: { provincia },
    createdAt: fecha,
    lastName: apellido,
    firstName: nombre,
  } = usuario;

  console.log(
    `Hello, ${nombre}, ${apellido}. Fuiste creado ${new Date(
      fecha
    ).toDateString()} y tu número es ${phoneNumber} y vives en ${provincia}.`
  );

  const dirImpresa = imprimirDir(direccion);

  console.log(`Dirección impresa: ${dirImpresa}`);
};

// saludar(person);

const buscarSegundoAnimal = (arr) => {
  const [, segundo, , cuarto] = arr;

  console.log(`El segundo animal es ${segundo} y el cuarto es ${cuarto}`);
};

// buscarSegundoAnimal(animals);

const imprimirPersona = (usuario) => {
  const { firstName, ...resto } = usuario;
  console.log(`Propiedades de ${firstName}, ${JSON.stringify(resto)}`);
};
imprimirPersona(person);

const aLoFormal = (usuario) => {
  return { ...usuario, firstName: "Robert", middleName: "the Rock" };
};

const formalBob = aLoFormal(person);

console.log("\n\n\n\n\n\n\n\n\n");
imprimirPersona(formalBob);
console.log("\n\n\n\n\n\n\n\n\n");
imprimirPersona(person);

const hacerAnimales = (arr) => {
  return [...arr, "zebra", "aguila"];
};

const masAnimales = hacerAnimales(animals);
console.table({ masAnimales });

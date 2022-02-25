const pokemon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);

const encontrarAntedDe10 = (arrDePokemon) => {
  const arr = [];
  for (let i = 0; i < arrDePokemon.length; i++) {
    if (arrDePokemon[i].id < 10) arr.push(arrDePokemon[i]);
  }
  return arr;
};

const pokemonesAntesDe10 = encontrarAntedDe10(pokemon);

const pokemonesAntesDe10Nuevo = pokemon.filter((p) => p.id < 10);

// console.log({ pokemonesAntesDe10, pokemonesAntesDe10Nuevo });

const divisiblePor3 = pokemon.filter(({ id }) => !!(id % 3 === 0));

const fuego = pokemon.filter(({ types }) => types.includes("fire"));

const masDeUnTipo = pokemon.filter(({ types }) => types.length > 1);

const soloNombres = pokemon.map(({ name }) => name);

const nombresMayoresDe99 = pokemon
  .filter(({ id }) => id > 99)
  .map(({ name }) => name);

const soloVeneno = pokemon.filter(
  ({ types }) => types.length === 1 && types.includes("poison")
);

const primerTipoCuandoSegundoEsVolar = pokemon
  .filter(({ types }) => types[1] === "flying")
  .map(({ types }) => types[0]);

const cantidadDeNormales = pokemon.filter(({ types }) =>
  types.includes("normal")
).length;

console.log({
  divisiblePor3,
  fuego,
  masDeUnTipo,
  soloNombres,
  nombresMayoresDe99,
  soloVeneno,
  primerTipoCuandoSegundoEsVolar,
  cantidadDeNormales,
});

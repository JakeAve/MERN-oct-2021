import axios from "axios";
import React from "react";

const Buttondepokemon = (props) => {
  const { actualizarPokemon } = props;

  //   const fetchPokemon = () => {
  //     fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=898")
  //       .then((response) => response.json())
  //       .then((data) => actualizarPokemon(data.results))
  //       .catch(() => actualizarPokemon([]));
  //   };

  const axiosPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=898")
      .then((response) => actualizarPokemon(response.data.results));
  };

  return <button onClick={axiosPokemon}>Fetch</button>;
};

export default Buttondepokemon;

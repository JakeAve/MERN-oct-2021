import "./App.css";
import { useState } from "react";
import Pokemon from "./components/Pokemon/Pokemon";
import Buttondepokemon from "./components/ButtonDePokemon/ButtonDePokemon";

function App() {
  const [listaDePokemon, setListaDePokemon] = useState([]);

  return (
    <div className="app">
      <Buttondepokemon actualizarPokemon={setListaDePokemon} />
      <ul>
        {listaDePokemon.map((obj, i) => (
          <Pokemon key={i} {...obj} />
        ))}
      </ul>
    </div>
  );
}

export default App;

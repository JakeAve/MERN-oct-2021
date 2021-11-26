import "./App.css";
import React from "react";
import Titulo from "./components/Titulo";
import Personcard from "./components/PersonCard/PersonCard";
import Personcard2 from "./components/PersonCard2/PersonCard2";

const personas = [
  { firstName: "Jane", lastName: "Doe", age: 45, hairColor: "black" },
  {
    firstName: "Pedro",
    lastName: "Pascal",
    age: 48,
    hairColor: "black",
  },
  {
    firstName: "Tom",
    lastName: "Cruise",
    age: 285,
    hairColor: "black",
  },
  {
    firstName: "Jennifer",
    lastName: "Lawrence",
    age: 45,
    hairColor: "brown",
  },
  {
    firstName: "Mister",
    lastName: "Miyagui",
    age: 45,
    hairColor: "black",
    favoriteColor: "black",
  },
];

function App() {
  return (
    <>
      <Titulo color="dodgerblue" subtitulo="Estos usan this.state">
        Con Componente de Clase
      </Titulo>

      <div className="person-list">
        {personas.map((p, idx) => (
          <Personcard key={idx} {...p} />
        ))}
      </div>

      <Titulo color="dodgerblue" subtitulo="Estos usan el gancho de useState">
        Con Componente de Funcción
      </Titulo>

      <div className="person-list">
        {personas.map((p, idx) => (
          <Personcard2 key={idx} {...p} />
        ))}
      </div>
    </>
  );
}

export default App;

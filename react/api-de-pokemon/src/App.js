import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
      .then((response) => response.json())
      .then((response) => setPeople(response.results));
  }, []);

  useEffect(() => {
    console.log("name ha cambiado");
    setName((nameAct) => nameAct + "foo");
  }, []);

  return (
    <div>
      {people.length > 0 &&
        people.map((person, index) => {
          return <div key={index}>{person.name}</div>;
        })}

      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}

export default App;

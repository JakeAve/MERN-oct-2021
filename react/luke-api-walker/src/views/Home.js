import React, { useEffect, useState } from "react";
import { getResource } from "../actions/getResource";
import Dropdown from "../components/DropDown/DropDown";
import Idform from "../components/IDForm.js/IDForm";
import Resultado from "../components/Resultado/Resultado";

const Home = (props) => {
  const { personId } = props;
  const [categoria, setCategoria] = useState("");
  const [swapiId, setSwapiId] = useState(personId || 1);
  const [resultado, setResultado] = useState();

  useEffect(() => {
    if (!personId) return;
    const personUrl = "https://swapi.dev/api/people/";
    const url = personUrl + personId;
    getResource(url).then((obj) => setResultado(obj));
    setCategoria(personUrl);
    setSwapiId(personId);
  }, [personId, setCategoria, setSwapiId]);

  return (
    <div className="swapi">
      <div className="formulario">
        <Dropdown setCategoria={setCategoria} />
        <Idform
          categoria={categoria}
          setResultado={setResultado}
          defaultId={swapiId}
        />
      </div>
      <Resultado data={resultado} />
    </div>
  );
};

export default Home;

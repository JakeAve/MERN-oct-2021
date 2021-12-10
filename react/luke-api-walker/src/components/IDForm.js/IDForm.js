import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getResource } from "../../actions/getResource";

const Idform = (props) => {
  const { defaultId } = props;
  const { categoria, setResultado } = props;
  const [swapiId, setSwapiId] = useState(defaultId);

  useEffect(() => {
    setResultado(null);
  }, [categoria, setResultado]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const url = categoria + swapiId;
    // async
    const obj = await getResource(url);
    setResultado(obj);
    // promesa
    // getResource(url).then((obj) => setResultado(obj));
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="swapi-id">ID</label>
      <input
        type="number"
        id="swapi-id"
        name="swapi-id"
        value={swapiId}
        onChange={(e) => setSwapiId(e.target.value)}
      />
      <button>Buscar</button>
    </form>
  );
};

export default Idform;

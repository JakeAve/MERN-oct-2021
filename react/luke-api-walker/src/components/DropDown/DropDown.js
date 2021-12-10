import React, { useEffect, useState } from "react";
import { getSwapiAsync } from "../../actions/getSwapiRoot";

const createOptions = (obj) => {
  return {
    JSX: Object.entries(obj).map(([key, value], i) => (
      <option key={i} value={value}>
        {key}
      </option>
    )),
    firstVal: Object.values(obj)[0],
  };
};

const Dropdown = (props) => {
  const { setCategoria } = props;
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getSwapiAsync().then((obj) => {
      const { JSX, firstVal } = createOptions(obj);
      setOptions(JSX);
      setCategoria(firstVal);
    });
  }, [setCategoria]);

  const onChange = (e) => {
    const valor = e.target.value;
    setCategoria(valor);
  };
  return (
    <div>
      <label htmlFor="drop-down">Buscar:</label>
      <select id="drop-down" onChange={onChange}>
        {options}
      </select>
    </div>
  );
};

export default Dropdown;

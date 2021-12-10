import React from "react";

const Resultado = (props) => {
  const { data } = props;

  if (!data) return null;
  if (data === "Not Found") return <h1>Estos no son los driodas ...</h1>;

  const entries = Object.entries(data).slice(0, 5);

  const lista = entries.map(([key, value], i) => {
    if (i === 0) return null;
    return (
      <li key={i}>
        {key}: {value}
      </li>
    );
  });

  return (
    <div>
      <h2>{entries[0][1]}</h2>
      <ul>{lista}</ul>
    </div>
  );
};

export default Resultado;

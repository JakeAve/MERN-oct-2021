import React, { useState } from "react";
import Button from "../components/Button";
import Content from "../components/Content";
import Formulario from "../components/Formulario";

const contenido = [
  { label: "Foo", content: "Contenido 1" },
  { label: "Bar", content: "Contenido 2" },
  { label: "Hi", content: "Contenido 3" },
];

const Home = () => {
  const [activo, setActivo] = useState(0);

  const crear = (data) => {
    console.log(
      `%c${JSON.stringify(data)}`,
      "color: limegreen; font-size: 1.2rem;"
    );
    window.alert("ha creado");
  };

  const editar = (data) => {
    console.log(
      `%c${JSON.stringify(data)}`,
      "color: orange; font-size: 1.2rem;"
    );
  };

  return (
    <div>
      {contenido.map((p, i) => {
        return (
          <Button
            key={i}
            {...p}
            activo={i === activo}
            activar={() => setActivo(i)}
          />
        );
      })}
      {contenido.map((p, i) => (
        <Content key={i} {...p} activo={i === activo} />
      ))}

      <h2>Crear</h2>
      <Formulario onSubmitCallback={crear} />
      <h2>Editar</h2>
      <Formulario onSubmitCallback={editar} />
    </div>
  );
};

export default Home;

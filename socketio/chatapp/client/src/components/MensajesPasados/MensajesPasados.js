import "./styles.css";
import React from "react";
import Mensaje from "../Mensaje/Mensaje";

const Mensajespasados = (props) => {
  const { mensajes } = props;

  return (
    <div className="mensajes-pasados">
      {mensajes.map((m, i) => (
        <Mensaje key={i} {...m} />
      ))}
    </div>
  );
};

export default Mensajespasados;

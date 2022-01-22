import "./styles.css";
import React, { useEffect, useRef } from "react";
import Mensaje from "../Mensaje/Mensaje";

const Mensajespasados = (props) => {
  const { mensajes } = props;
  const finDeMensajes = useRef(null);

  useEffect(() => {
    finDeMensajes?.current.scrollIntoView({ behavior: "smooth" });
  }, [mensajes]);

  return (
    <div className="mensajes-pasados">
      {mensajes.map((m, i) => (
        <Mensaje key={i} {...m} />
      ))}
      <div ref={finDeMensajes} />
    </div>
  );
};

export default Mensajespasados;

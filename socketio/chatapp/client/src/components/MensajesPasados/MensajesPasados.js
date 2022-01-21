import "./styles.css";
import React, { useEffect } from "react";
import { useSocket } from "../../contexts/socketContext";
import Mensaje from "../Mensaje/Mensaje";

const Mensajespasados = (props) => {
  const { mensajes, nuevoMensaje } = props;
  const socket = useSocket();

  useEffect(() => {
    socket.on("msj-a-clientes", (m) => {
      nuevoMensaje(m);
    });
  });

  return (
    <div className="mensajes-pasados">
      {mensajes.map((m, i) => (
        <Mensaje key={i} {...m} />
      ))}
    </div>
  );
};

export default Mensajespasados;

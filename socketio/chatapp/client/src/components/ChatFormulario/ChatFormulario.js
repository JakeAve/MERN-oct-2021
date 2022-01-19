import React, { useState } from "react";
import { useSocket } from "../../contexts/socketContext";
import { useUsuario } from "../../contexts/usuarioContext";

const Chatformulario = (props) => {
  const socket = useSocket();
  const [mensaje, setMensaje] = useState("");
  const { usuario } = useUsuario();
  const { nuevoPropioMensaje } = props;

  const enviarMensaje = (e) => {
    e.preventDefault();
    const hora = new Date();
    const msj = { mensaje, usuario, hora };
    socket.emit("msj-a-servidor", msj);
    nuevoPropioMensaje(msj);
    setMensaje("");
  };

  return (
    <form onSubmit={enviarMensaje}>
      <label htmlFor="mensaje">Mensaje</label>
      <textarea
        id="mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      ></textarea>
      <button>Enviar</button>
    </form>
  );
};

export default Chatformulario;

import React, { useEffect, useState } from "react";
import { useSocket } from "../../contexts/socketContext";
import { useUsuario } from "../../contexts/usuarioContext";
import Chatformulario from "../ChatFormulario/ChatFormulario";
import Mensajespasados from "../MensajesPasados/MensajesPasados";

const Chat = () => {
  const { usuario } = useUsuario();
  const socket = useSocket();
  const [mensajes, setMensajes] = useState([]);

  const nuevoMensaje = (m) => {
    setMensajes((curr) => [...curr, m]);
  };

  useEffect(() => {
    nuevoMensaje({
      usuario,
      tipo: "nuevo_usuario",
      hora: new Date(),
      mensaje: "Tú entraste el chat",
    });
    socket.on("mensajes-pasados", (msjs) => {
      console.log({ msjs });
      setMensajes(msjs);
    });
  }, [usuario, socket]);

  return (
    <div>
      <Mensajespasados mensajes={mensajes} nuevoMensaje={nuevoMensaje} />
      <Chatformulario nuevoPropioMensaje={nuevoMensaje} />
    </div>
  );
};

export default Chat;

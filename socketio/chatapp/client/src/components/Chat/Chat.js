import "./styles.css";
import React, { useCallback, useEffect, useState } from "react";
import { useSocket } from "../../contexts/socketContext";
import { useUsuario } from "../../contexts/usuarioContext";
import Chatformulario from "../ChatFormulario/ChatFormulario";
import Mensajespasados from "../MensajesPasados/MensajesPasados";

const Chat = () => {
  const socket = useSocket();
  const [mensajes, setMensajes] = useState([]);
  const { usuario } = useUsuario();

  const nuevoMensaje = useCallback(
    (m) => setMensajes((curr) => [...curr, m]),
    []
  );

  useEffect(() => {
    socket.on("mensajes-pasados", (msjs) => {
      setMensajes((curr) => [...msjs, ...curr]);
    });

    socket.on("msj-a-clientes", (m) => {
      nuevoMensaje(m);
    });
  }, [socket, nuevoMensaje]);

  useEffect(() => {
    if (usuario) {
      nuevoMensaje({
        mensaje: "{u} ha entrado el chat",
        usuario,
        hora: new Date(),
        tipo: "nuevo_usuario",
      });
    }
  }, [usuario, nuevoMensaje]);

  return (
    <div className="chat-container">
      <Mensajespasados mensajes={mensajes} />
      <Chatformulario nuevoPropioMensaje={nuevoMensaje} />
    </div>
  );
};

export default Chat;

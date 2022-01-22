import "./styles.css";
import React from "react";
import { useUsuario } from "../../contexts/usuarioContext";

const Mensaje = (props) => {
  const {
    usuario: usuarioQueEnvioElChat,
    mensaje: mensajeQueEnvioElChat,
    hora,
    tipo,
  } = props;
  const { usuario } = useUsuario();
  const esPropio = usuario === usuarioQueEnvioElChat;
  const esSistema = Boolean(tipo);

  let mensaje = mensajeQueEnvioElChat;
  if (tipo === "nuevo_usuario")
    mensaje = mensajeQueEnvioElChat.replace(/{u}/, usuarioQueEnvioElChat);
  if (tipo === "nuevo_usuario" && esPropio) mensaje = "Tú entraste el chat";
  if (tipo === "disconnect_usuario")
    mensaje = mensajeQueEnvioElChat.replace(/{u}/, usuarioQueEnvioElChat);

  return (
    <div
      className={`mensaje ${esPropio ? "propio" : ""} ${
        esSistema ? "sistema" : ""
      }`}
    >
      <p>{mensaje}</p>
      <div>
        <div>{esPropio ? "Tú" : usuarioQueEnvioElChat}</div>
        <div>{new Date(hora).toLocaleTimeString()}</div>
      </div>
    </div>
  );
};

export default Mensaje;

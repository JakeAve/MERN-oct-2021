import "./styles.css";
import React, { useRef, useState } from "react";
import { useSocket } from "../../contexts/socketContext";
import { useUsuario } from "../../contexts/usuarioContext";

const textareaSizes = {
  minHeight: "1.1rem",
  padding: "0.5rem",
};

const Chatformulario = (props) => {
  const socket = useSocket();
  const [mensaje, setMensaje] = useState("");
  const { usuario } = useUsuario();
  const { nuevoPropioMensaje } = props;
  const textareaRef = useRef(null);
  const formRef = useRef(null);

  const enviarMensaje = (e) => {
    e.preventDefault();
    if (!mensaje.trim()) return;
    const hora = new Date();
    const msj = { mensaje: mensaje.trim(), usuario, hora };
    socket.emit("msj-a-servidor", msj);
    nuevoPropioMensaje(msj);
    setMensaje("");
    textareaRef.current.style.height = textareaSizes.minHeight;
  };

  const resizeTextarea = () => {
    textareaRef.current.style.height = textareaSizes.minHeight;
    textareaRef.current.style.height = `calc(${
      textareaRef.current.scrollHeight + "px"
    } - ${textareaSizes.padding} - ${textareaSizes.padding})`;
  };

  const checkForEnter = (e) => {
    if (e.shiftKey) return;
    if (e.key === "Enter") enviarMensaje(e);
  };

  return (
    <form className="chat-formulario" onSubmit={enviarMensaje} ref={formRef}>
      <div aria-label="Mensaje" className="text-area-container">
        <textarea
          id="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          onKeyUp={(e) => {
            resizeTextarea();
            checkForEnter(e);
          }}
          ref={textareaRef}
          style={{
            "--textarea-height": textareaSizes.minHeight,
            "--textarea-padding": textareaSizes.padding,
          }}
        ></textarea>
        <button className="btn enviar-btn">Enviar</button>
      </div>
    </form>
  );
};

export default Chatformulario;

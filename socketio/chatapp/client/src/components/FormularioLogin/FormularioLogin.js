import React from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../../contexts/socketContext";
import { useUsuario } from "../../contexts/usuarioContext";

const FormularioLogin = () => {
  const { usuario, setUsuario } = useUsuario();
  console.log({ usuario, setUsuario });
  const socket = useSocket();

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    socket.emit("nuevo_usuario", {
      usuario,
      hora: new Date(),
      mensaje: "{u} ha entrado el chat",
    });
    navigate("/chat");
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="usuario">Username</label>
      <input
        id="usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <button>Comenzar</button>
    </form>
  );
};

export default FormularioLogin;

import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/usuario";
import { useSocket } from "../../contexts/socketContext";
import { useUsuario } from "../../contexts/usuarioContext";

const FormularioLogin = () => {
  const { usuario, setUsuario } = useUsuario();
  const socket = useSocket();

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target.closest("form"));
    const payload = {
      correo: formData.get("correo"),
      password: formData.get("password"),
    };

    const { success, data } = await login(payload);

    if (!success) return window.alert("No se pudo entrar");
    const usuario = data.usuario;
    setUsuario(usuario);
    socket.emit("nuevo_usuario", {
      usuario,
      hora: new Date(),
      mensaje: "{u} ha entrado el chat",
    });
    navigate("/chat");
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="correo">Correo</label>
      <input id="correo" defaultValue={usuario || ""} name="correo" />
      <label htmlFor="password">Contraseña</label>
      <input id="password" type="password" name="password" />
      <button>Comenzar</button>
    </form>
  );
};

export default FormularioLogin;

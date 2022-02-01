import "./styles.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/usuario";
import { useUsuario } from "../../contexts/usuarioContext";

const FormularioLogin = () => {
  const { usuario, setUsuario } = useUsuario();

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
    navigate("/chat");
  };

  return (
    <form className="formulario-login" onSubmit={onSubmit}>
      <label htmlFor="correo" className="login-label">
        Correo
      </label>
      <input
        id="correo"
        defaultValue={usuario || ""}
        name="correo"
        type="email"
        className="login-input"
      />
      <label htmlFor="password" className="login-label">
        Contraseña
      </label>
      <input
        id="password"
        type="password"
        name="password"
        className="login-input"
      />
      <button className="btn login-btn">Comenzar</button>
    </form>
  );
};

export default FormularioLogin;

import React from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../api/usuario";
import { useUsuario } from "../../contexts/usuarioContext";

export const FormularioSignup = () => {
  const { setUsuario } = useUsuario();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {};
    const form = e.target.closest("form");
    const formData = new FormData(form);
    for (const [key, value] of formData.entries()) data[key] = value;
    const { success, data: usuario } = await signup(data);
    if (success) {
      form.reset();
      setUsuario(usuario.usuario);
      navigate("/chat");
    } else {
      alert("No se pudo registrar");
    }
  };

  return (
    <form className="formulario-login" onSubmit={onSubmit}>
      <label htmlFor="nombres" className="login-label">
        Nombres
      </label>
      <input id="nombres" name="nombres" type="text" className="login-input" />
      <label htmlFor="apellidos" className="login-label">
        Apellidos
      </label>
      <input
        id="apellidos"
        name="apellidos"
        type="text"
        className="login-input"
      />
      <label htmlFor="correo" className="login-label">
        Correo
      </label>
      <input id="correo" name="correo" type="email" className="login-input" />
      <label htmlFor="usuario" className="login-label">
        Usuario
      </label>
      <input id="usuario" name="usuario" type="text" className="login-input" />
      <label htmlFor="password" className="login-label">
        Contraseña
      </label>
      <input
        id="password"
        type="password"
        name="password"
        className="login-input"
      />
      <label htmlFor="confirm-password" className="login-label">
        Confirmar contraseña
      </label>
      <input
        id="confirm-password"
        type="password"
        name="confirmPassword"
        className="login-input"
      />
      <button className="btn login-btn">Comenzar</button>
    </form>
  );
};

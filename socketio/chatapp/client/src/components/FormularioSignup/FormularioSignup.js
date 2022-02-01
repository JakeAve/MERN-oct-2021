import React from "react";

export const FormularioSignup = () => {
  return (
    <form className="formulario-login" onSubmit={() => {}}>
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
        name="confirm-password"
        className="login-input"
      />
      <button className="btn login-btn">Comenzar</button>
    </form>
  );
};

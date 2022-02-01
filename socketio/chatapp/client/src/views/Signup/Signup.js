import React from "react";
import { Link } from "react-router-dom";
import { FormularioSignup } from "../../components/FormularioSignup/FormularioSignup";

export const Signup = () => {
  return (
    <div className="formulario-wrap-div">
      <h2 className="cuenta-titulo">Cree una cuenta</h2>
      <FormularioSignup />
      <div className="cuenta-blurb">
        Ya tiene una cuenta? <Link to="/login">Ingrese aquí.</Link>
      </div>
    </div>
  );
};

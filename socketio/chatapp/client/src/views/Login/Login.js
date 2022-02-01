import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";
import FormularioLogin from "../../components/FormularioLogin/FormularioLogin";

const Login = () => {
  return (
    <div className="formulario-wrap-div">
      <h2 className="cuenta-titulo">Ingrese aquí</h2>
      <FormularioLogin />
      <div className="cuenta-blurb">
        No tiene cuenta? <Link to="/signup">Cree una cuenta aquí.</Link>
      </div>
    </div>
  );
};

export default Login;

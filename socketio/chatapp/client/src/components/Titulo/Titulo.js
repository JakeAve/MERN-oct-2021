import "./styles.css";
import React from "react";
import { useUsuario } from "../../contexts/usuarioContext";
import { EditarUsuario } from "../EditarUsuario/EditarUsuario";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "../DarkModeSwitch/DarkModeSwitch";

export const Titulo = () => {
  const { usuario } = useUsuario();
  const boton = usuario ? (
    <EditarUsuario nombre={usuario} correo={usuario} />
  ) : (
    <Link to="/login" className="btn">
      Ingresar
    </Link>
  );
  return (
    <div className="top-bar">
      <h1 className="main-title">El Chat</h1>
      <div className="right-container">
        <DarkModeSwitch />
        {boton}
      </div>
    </div>
  );
};

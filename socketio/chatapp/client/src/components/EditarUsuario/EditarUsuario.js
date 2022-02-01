import "./styles.css";
import React, { useRef, useState } from "react";
import { useUsuario } from "../../contexts/usuarioContext";

export const EditarUsuario = (props) => {
  const { nombre } = props;
  const [abierto, _setAbierto] = useState(false);
  const btnRef = useRef();

  const { logout } = useUsuario();

  const esconder = (e) => {
    if (e.target !== btnRef.current) _setAbierto(false);
  };

  const setAbierto = (valor) => {
    _setAbierto(valor);
    if (valor) document.body.addEventListener("click", esconder);
    else document.body.removeEventListener("click", esconder);
  };

  return (
    <div className="editar-btn-container">
      <button
        onClick={() => setAbierto(!abierto)}
        aria-expanded={abierto}
        aria-controls="editar-lista"
        className="btn"
        ref={btnRef}
      >
        {nombre}
      </button>
      <ul id="editar-lista" className="editar-lista" data-abierto={abierto}>
        <li>
          <button className="editar-lista-item">Editar</button>
        </li>
        <li>
          <button className="editar-lista-item" onClick={logout}>
            Cerrar sessión
          </button>
        </li>
      </ul>
    </div>
  );
};

import "./styles.css";
import React from "react";
import { Link } from "react-router-dom";

export const ListaDeSalones = (props) => {
  const { seleccionadoId, salones } = props;

  return (
    <div className="lista-de-salones-container">
      <button className="btn">Crear</button>
      <ul className="lista-de-salones">
        {salones.map((s, i) => (
          <li
            className={`salon-item ${
              seleccionadoId === s._id ? "seleccionado" : ""
            }`}
            key={i}
          >
            <Link to={`/chat/${s._id}`}>{s.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

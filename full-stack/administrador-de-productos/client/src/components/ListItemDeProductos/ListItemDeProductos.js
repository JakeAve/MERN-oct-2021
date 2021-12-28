import { Link } from "@reach/router";
import React from "react";
import { eliminarProducto } from "../../actions/producto";
import Eliminarboton from "../EliminarBoton/EliminarBoton";

const Listitemdeproductos = (props) => {
  const { _id, title, refresh } = props;

  return (
    <li>
      <Link to={`/${_id}`}>{title}</Link>
      <Eliminarboton despuésDeEliminar={refresh} _id={_id} />
    </li>
  );
};

export default Listitemdeproductos;

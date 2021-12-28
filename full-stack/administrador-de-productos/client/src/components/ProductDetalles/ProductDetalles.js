import React from "react";
import { Link, useNavigate } from "@reach/router";
import { eliminarProducto } from "../../actions/producto";
import Eliminarboton from "../EliminarBoton/EliminarBoton";

const Productdetalles = (props) => {
  const { _id, title, price, description } = props;
  const navigate = useNavigate();

  return (
    <div className="product-detalles">
      <h2>{title}</h2>
      <p>${Number(price).toFixed(2)}</p>
      <p>{description}</p>
      <Link to={`/edit/${_id}`}>Edit</Link>
      <Eliminarboton _id={_id} depuésDeEliminar={() => navigate("/")} />
    </div>
  );
};

export default Productdetalles;

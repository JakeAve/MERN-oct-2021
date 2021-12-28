import React from "react";
import { Link } from "@reach/router";

const Productdetalles = (props) => {
  const { _id, title, price, description } = props;
  
  const onClick = () => {
    
  }

  return (
    <div className="product-detalles">
      <h2>{title}</h2>
      <p>${Number(price).toFixed(2)}</p>
      <p>{description}</p>
      <Link to={`/edit/${_id}`}>Edit</Link>
      <button onClick={onClick}>Eliminar</button>
    </div>
  );
};

export default Productdetalles;

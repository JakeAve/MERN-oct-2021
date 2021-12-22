import React, { useEffect, useState } from "react";
import { getTodos } from "../../actions/producto";
import { Link } from "@reach/router";

const Listadeproductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getTodos().then(({ data }) => {
      console.log(data);
      setProductos(data);
    });
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      <ul>
        {productos.map(({ _id, title }) => (
          <li key={_id}>
            <Link to={`/${_id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listadeproductos;

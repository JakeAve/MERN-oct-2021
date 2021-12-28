import React, { useEffect, useState } from "react";
import { getTodos } from "../../actions/producto";
import Listitemdeproductos from "../ListItemDeProductos/ListItemDeProductos";

const Listadeproductos = () => {
  const [productos, setProductos] = useState([]);
  const [haEliminado, setHaEliminado] = useState(0);

  const refresh = () => setHaEliminado((c) => c + 1);

  useEffect(() => {
    getTodos().then(({ data }) => {
      console.log(data);
      setProductos(data);
    });
  }, [haEliminado]);

  return (
    <div>
      <h2>All Products</h2>
      <ul>
        {productos.map(({ _id, title }) => (
          <Listitemdeproductos
            key={_id}
            _id={_id}
            title={title}
            refresh={refresh}
          />
        ))}
      </ul>
    </div>
  );
};

export default Listadeproductos;

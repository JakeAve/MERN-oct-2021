import React from "react";
import { eliminarProducto } from "../../actions/producto";

const Eliminarboton = (props) => {
  const { depuésDeEliminar, _id } = props;
  const eliminar = async () => {
    await eliminarProducto(_id);
    depuésDeEliminar();
  };
  return <button onClick={eliminar}>Eliminar Producto</button>;
};

export default Eliminarboton;

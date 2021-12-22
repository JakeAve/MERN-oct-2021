import React, { useEffect, useState } from "react";
import { getUnProducto } from "../actions/producto";
import Editarproducto from "../components/EditarProducto/EditarProducto";
import Productdetalles from "../components/ProductDetalles/ProductDetalles";

const Productview = (props) => {
  const { _id, path } = props;
  const estaEditando = path.includes("edit");

  const [productoProps, setProductoProps] = useState(null);
  const [existe, setExiste] = useState(true);

  useEffect(() => {
    getUnProducto(_id).then(({ data }) => {
      setProductoProps(data);
      if (!data) setExiste(false);
    });
  }, [_id]);

  if (!existe) return <div>No se encontró este producto</div>;

  if (!productoProps) return <div>Loading...</div>;

  if (estaEditando) return <Editarproducto {...productoProps} />;

  return <Productdetalles {...productoProps} />;
};

export default Productview;

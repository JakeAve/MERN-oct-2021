import React from "react";
import Listadeproductos from "../components/ListaDeProductos/ListaDeProductos";
import Nuevoproducto from "../components/NuevoProducto/NuevoProducto";

const Home = () => {
  return (
    <>
      <Nuevoproducto />
      <Listadeproductos />
    </>
  );
};

export default Home;

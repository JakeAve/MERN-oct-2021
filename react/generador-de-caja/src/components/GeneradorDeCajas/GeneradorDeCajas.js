import React, { useEffect, useState } from "react";
import Cajas from "../Cajas/Cajas";
import Formulariodecajas from "../FormularioDeCajas/FormularioDeCajas";

const Generadordecajas = () => {
  const [listaDeCajas, setListaDeCajas] = useState([]);

  const añadirNuevaCaja = (nuevaCaja) => {
    setListaDeCajas((lista) => [...lista, nuevaCaja]);
    //   setListaDeCajas([...listaDeCajas, nuevaCaja]) // tambien funciona
  };

  return (
    <div className="generador-de-cajas">
      <Formulariodecajas añadirNuevaCaja={añadirNuevaCaja} />
      <Cajas cajas={listaDeCajas} />
    </div>
  );
};

export default Generadordecajas;

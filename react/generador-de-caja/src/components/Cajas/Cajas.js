import React from "react";
import Caja from "../Caja/Caja";

const Cajas = (props) => {
  const { cajas = [] } = props;
  return (
    <div className="cajas">
      {cajas.map(({ color, entero }, i) => (
        <Caja key={i} color={color} entero={entero} />
      ))}
    </div>
  );
};

export default Cajas;

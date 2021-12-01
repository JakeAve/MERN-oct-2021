import React from "react";

const Caja = (props) => {
  const { color, entero = "50" } = props;
  return (
    <div
      className="caja"
      style={{ background: color, height: entero + "px", width: entero + "px" }}
    ></div>
  );
};

export default Caja;

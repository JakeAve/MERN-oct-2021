import React from "react";

const Datosdeformulario = (props) => {
  const { formulario } = props;
  return <code>{JSON.stringify(formulario, null, 4)}</code>;
};

export default Datosdeformulario;

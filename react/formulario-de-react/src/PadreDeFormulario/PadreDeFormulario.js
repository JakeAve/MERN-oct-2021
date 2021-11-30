import React, { useState } from "react";
import Datosdeformulario from "../DatosDeFormulario/DatosDeFormulario";
import Formulario from "../Formulario/Formulario";

const Padredeformulario = () => {
  const [formulario, setFormulario] = useState();
  return (
    <div>
      <Formulario
        formulario={formulario}
        actualizarFormulario={setFormulario}
      />
      <Datosdeformulario formulario={formulario} />
    </div>
  );
};

export default Padredeformulario;

import React, { useState } from "react";
import useFormValidation from "./hooks/useFormValidation";

const Formulario = () => {
  const [haSubido, setHaSubido] = useState(false);

  const [formulario, setFormulario] = useState();
  const validaciòn = useFormValidation(formulario);

  const cambioDeForm = (e) => {
    const formEl = e.target.closest("form");
    const formData = new FormData(formEl);
    const entries = {};
    for (let [key, value] of formData.entries()) entries[key] = value;
    setFormulario(entries);
  };

  const subirFormulario = (e) => {
    e.preventDefault();

    setHaSubido(true);
  };

  const mensaje = haSubido
    ? "Gracias por enviar el formulario!"
    : "Por favor, rellene este formulario.";

  return (
    <div className="form-container" submitted={haSubido.toString()}>
      <div className="mensaje">{mensaje}</div>
      <form onChange={cambioDeForm} onSubmit={subirFormulario}>
        <div className="input-wrapper">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" id="nombre" />

          {validaciòn.nombre}
        </div>
        <div className="input-wrapper">
          <label htmlFor="apellido">Apellido</label>
          <input type="text" name="apellido" id="apellido" />
          {validaciòn.apellido}
        </div>
        <div className="input-wrapper">
          <label htmlFor="correo">Correo</label>
          <input type="email" name="correo" id="correo" />
          {validaciòn.correo}
        </div>
        <div className="input-wrapper">
          <label htmlFor="contraseña">Contraseña</label>
          <input type="password" name="contraseña" id="contraseña" />
          {validaciòn.contraseña}
        </div>
        <div className="input-wrapper">
          <label htmlFor="confirmar-contraseña">Confirmar Contraseña</label>
          <input
            type="password"
            name="confirmar-contraseña"
            id="confirmar-contraseña"
          />
          {validaciòn.confirmarContraseña}
        </div>

        <button>Insbirirse</button>
      </form>
    </div>
  );
};

export default Formulario;

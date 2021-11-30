import React, { useState } from "react";
import formValidation from "./hooks/useFormValidation";

const Formulario = (props) => {
  const { formulario, actualizarFormulario } = props;

  const [haIntentadoSubir, setHaIntendadoSubir] = useState(false);
  const [haSubido, setHaSubido] = useState(false);

  const { validaciones } = formValidation(formulario, haIntentadoSubir);

  const cambioDeForm = (e) => {
    const formEl = e.target.closest("form");
    const formData = new FormData(formEl);
    const entries = {};
    for (let [key, value] of formData.entries()) entries[key] = value.trim();
    entries.color = formData.getAll("color").filter(Boolean);
    actualizarFormulario(entries);
    return entries;
  };

  const subirFormulario = (e) => {
    e.preventDefault();
    const entries = cambioDeForm(e);
    const { todosValidos } = formValidation(entries, true);
    setHaIntendadoSubir(true);
    if (todosValidos) setHaSubido(true);
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
          {validaciones.nombre}
        </div>
        <div className="input-wrapper">
          <label htmlFor="apellido">Apellido</label>
          <input type="text" name="apellido" id="apellido" />
          {validaciones.apellido}
        </div>
        <div className="input-wrapper">
          <label htmlFor="correo">Correo</label>
          <input type="email" name="correo" id="correo" />
          {validaciones.correo}
        </div>
        <div className="input-wrapper">
          <label htmlFor="contraseña">Contraseña</label>
          <input type="password" name="contraseña" id="contraseña" />
          {validaciones.contraseña}
        </div>
        <div className="input-wrapper">
          <label htmlFor="confirmar-contraseña">Confirmar Contraseña</label>
          <input
            type="password"
            name="confirmar-contraseña"
            id="confirmar-contraseña"
          />
          {validaciones.confirmarContraseña}
        </div>

        <div className="input-wrapper">
          <label htmlFor="color-1">Color 1 </label>
          <input type="text" name="color" id="color-1" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="color-2">Color 2 </label>
          <input type="text" name="color" id="color-2" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="color-3">Color 3 </label>
          <input type="text" name="color" id="color-3" />
        </div>

        <button>Insbirirse</button>
      </form>
    </div>
  );
};

export default Formulario;

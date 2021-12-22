import './FormularioDeAutor.css';
import React, { useState } from 'react';
import useValidarFormulario from './hooks/useValidarFormulario';

const getFormData = (form) => {
  const _formData = new FormData(form);
  const data = {};
  for (const [key, value] of _formData.entries()) data[key] = value;
  return data;
};

export default function FormularioDeAutor(props) {
  const { valoresDeEfecto, onSubmitCallback } = props;
  const [haIntentado, setHaIntentado] = useState(false);

  const { validations, validar } = useValidarFormulario();

  const handleChange = (e, intentar = false) => {
    const data = getFormData(e.target.closest('form'));
    const { esVálido } = validar(data, haIntentado || intentar);
    return { data, esVálido };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHaIntentado(true);
    const { data, esVálido } = handleChange(e, true);
    if (esVálido) onSubmitCallback(data);
  };

  return (
    <form
      className="formulario-de-autor"
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <div className="input-wrapper">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={valoresDeEfecto?.name || ''}
        />
        {validations.name}
      </div>
      <div className="buttons">
        <button type="reset">Cancelar</button>
        <button type="submit">Aceptar</button>
      </div>
    </form>
  );
}

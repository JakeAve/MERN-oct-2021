import './FormularioDeAutor.css';
import React, { useState } from 'react';
import useValidarFormulario, {
  ErrorMessage,
} from './hooks/useValidarFormulario';

const getFormData = (form) => {
  const _formData = new FormData(form);
  const data = {};
  for (const [key, value] of _formData.entries()) data[key] = value;
  const libros = _formData.getAll('libro');
  const premios = _formData.getAll('premio');
  return { ...data, libros, premios };
};

export default function FormularioDeAutor(props) {
  const { valoresDeEfecto, onSubmitCallback } = props;
  const [haIntentado, setHaIntentado] = useState(false);

  const { validations, validar, setValidations } = useValidarFormulario();

  const handleChange = (e, intentar = false) => {
    const data = getFormData(e.target.closest('form'));
    const { esVálido } = validar(data, haIntentado || intentar);
    console.log({ data });
    return { data, esVálido };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHaIntentado(true);
    const { data /* esVálido */ } = handleChange(e, true);
    const errores = await onSubmitCallback(data);
    if (errores) {
      setValidations((validacionesExistentes) => {
        for (const err in errores) {
          console.log(err, errores[err].message);
          validacionesExistentes[err] = (
            <ErrorMessage message={errores[err].message} />
          );
          return validacionesExistentes;
        }
      });
    }
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
      <div className="input-wrapper">
        <label htmlFor="libro-1">Libro 1</label>
        <input type="text" name="libro" id="libro-1" defaultValue={''} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="libro-1">Libro 2</label>
        <input type="text" name="libro" id="libro-2" defaultValue={''} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="premio-1">Premio 1</label>
        <input type="text" name="premio" id="premio-1" defaultValue={''} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="premio-2">Premio 2</label>
        <input type="text" name="premio" id="premio-2" defaultValue={''} />
      </div>
      <div className="buttons">
        <button type="reset">Cancelar</button>
        <button type="submit">Aceptar</button>
      </div>
    </form>
  );
}

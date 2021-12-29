import { useState } from 'react';

export const ErrorMessage = ({ message }) => {
  return <div className="error-message">{message}</div>;
};

const useValidarFormulario = () => {
  const [validations, setValidations] = useState({});
  const [todoBien, setTodoBien] = useState(true);

  const fields = {
    name: {
      criteria: (value) => value.trim().length >= 3,
      message: 'El nombre debe tener más de 3 caracteres frontend',
    },
  };

  const validar = (formData, intentado) => {
    const validations = {};

    Object.keys(fields).forEach((key) => {
      const value = formData[key];
      if (!value && !intentado) return;
      const { criteria } = fields[key];
      if (!criteria(value))
        validations[key] = <ErrorMessage message={fields[key].message} />;
    });

    setValidations(validations);
    const esVálido = !Object.keys(validations).length;
    setTodoBien(esVálido);

    return { esVálido };
  };

  return { validar, validations, todoBien, setValidations };
};

export default useValidarFormulario;

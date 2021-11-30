const formValidation = (formulario, haIntentadoSubir) => {
  const validaciones = {
    nombre: (haIntentadoSubir || formulario?.nombre) &&
      formulario.nombre.trim().length < 2 && (
        <div className="validator">
          Nombre necesita tener al menos 2 letras{" "}
        </div>
      ),
    apellido:
      (haIntentadoSubir || formulario?.apellido) &&
      formulario.apellido.trim().length < 2 ? (
        <div className="validator">
          Apellido necesita tener al menos 2 letras{" "}
        </div>
      ) : null,
    correo:
      (haIntentadoSubir || formulario?.correo) &&
      !/.*@.*\..*\b/.test(formulario.correo) ? (
        <div className="validator">Correo no es válido</div>
      ) : null,
    contraseña:
      (haIntentadoSubir || formulario?.contraseña) &&
      formulario.contraseña.trim().length < 8 ? (
        <div className="validator">
          Contraseña necesita tener al menos 8 símbolos{" "}
        </div>
      ) : null,
    confirmarContraseña:
      (haIntentadoSubir || formulario?.["confirmar-contraseña"]) &&
      formulario?.contraseña &&
      formulario["confirmar-contraseña"] !== formulario.contraseña ? (
        <div className="validator">Las contraseñas no son la misma</div>
      ) : null,
  };

  let todosValidos = true;
  for (let val of Object.values(validaciones)) if (val) todosValidos = false;

  return { validaciones, todosValidos };
};

export default formValidation;

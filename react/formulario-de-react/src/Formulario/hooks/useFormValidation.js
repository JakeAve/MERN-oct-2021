const useFormValidation = (formulario) => {
  return {
    nombre: formulario && formulario.nombre && formulario.nombre.length < 2 && (
      <div className="validator">Nombre necesita tener al menos 2 letras </div>
    ),
    apellido:
      formulario && formulario.apellido && formulario.apellido.length < 2 ? (
        <div className="validator">
          Apellido necesita tener al menos 2 letras{" "}
        </div>
      ) : null,
    correo:
      formulario &&
      formulario.correo &&
      !/.*@.*\..*\b/.test(formulario.correo) ? (
        <div className="validator">Correo no es válido</div>
      ) : null,
    contraseña:
      formulario &&
      formulario.contraseña &&
      formulario.contraseña.length < 8 ? (
        <div className="validator">
          Contraseña necesita tener al menos 8 símbolos{" "}
        </div>
      ) : null,
    confirmarContraseña:
      formulario &&
      formulario["confirmar-contraseña"] &&
      formulario.contraseña &&
      formulario["confirmar-contraseña"] !== formulario.contraseña ? (
        <div className="validator">Las contraseñas no son la misma</div>
      ) : null,
  };
};

export default useFormValidation;

const formValidation = (formulario, haIntentadoSubir) => {
  const validaciones = {
    title: (haIntentadoSubir || formulario?.title) &&
      formulario.title.trim().length < 3 && (
        <div className="validator">El título tiene que ser más largo</div>
      ),
    price:
      (haIntentadoSubir || formulario?.price) &&
      Number(formulario.price.trim()) > 0 ? (
        <div className="validator">El precio tiene que ser más de 0</div>
      ) : null,
    description:
      (haIntentadoSubir || formulario?.description) &&
      formulario.description.trim().length < 3 ? (
        <div className="validator">Correo no es válido</div>
      ) : null,
  };

  let todosValidos = true;
  for (let val of Object.values(validaciones)) if (val) todosValidos = false;

  return { validaciones, todosValidos };
};

export default formValidation;

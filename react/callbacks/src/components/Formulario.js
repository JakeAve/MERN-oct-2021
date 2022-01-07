import React from "react";

const Formulario = (props) => {
  const { defaultValues = {}, onSubmitCallback = (d) => console.log(d) } =
    props;

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // validaciones
    const data = {
      nombre: formData.get("nombre"),
      apellido: formData.get("apellido"),
    };
    onSubmitCallback(data);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Nombre
        <input name="nombre" defaultValue={defaultValues.nombre || ""} />
      </label>
      <label>
        Apellido
        <input name="apellido" defaultValue={defaultValues.apellido || ""} />
      </label>
      <button>Subir</button>
    </form>
  );
};

export default Formulario;

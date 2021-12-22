import React, { useState } from "react";
import { crearProducto } from "../../actions/producto";

const crearNuevoProducto = async (formData) => {
  try {
    const { success } = await crearProducto(formData);
    if (!success) window.alert("No se pudo subir");
  } catch {}
};

const Nuevoproducto = (props) => {
  const { defaultValues, onSubmitCallback = crearNuevoProducto } = props;
  // const [haIntentadoSubir, setHaIntendadoSubir] = useState(false);
  const [form, setForm] = useState(
    defaultValues || { title: "", price: 0, description: "" }
  );

  const onSubmit = (e) => {
    e.preventDefault();
    const formEl = e.target.closest("form");
    const formData = new FormData(formEl);
    const entries = {};
    for (let [key, value] of formData.entries()) entries[key] = value.trim();

    setForm(entries);
    onSubmitCallback(entries);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">Título</label>
      <input type="text" id="title" name="title" defaultValue={form.title} />
      <label htmlFor="price">Precio</label>
      <input type="number" id="price" name="price" defaultValue={form.price} />
      <label htmlFor="description">Descripción</label>
      <input
        type="text"
        id="description"
        name="description"
        defaultValue={form.description}
      />
      <button>Subir</button>
    </form>
  );
};

export default Nuevoproducto;

import React, { useState } from "react";

const Formulariodecajas = (props) => {
  const { añadirNuevaCaja } = props;
  const [color, setColor] = useState("");
  const [entero, setEntero] = useState(50);

  const subirFormulario = (e) => {
    e.preventDefault();
    if (!color) return window.alert("No hay color");
    añadirNuevaCaja({ color, entero });
    setColor("");
    setEntero(50);
  };

  return (
    <form onSubmit={subirFormulario}>
      <label htmlFor="color">Color</label>
      <input
        type="text"
        name="color"
        id="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <label htmlFor="entero">Entero</label>
      <input
        type="number"
        name="entero"
        id="entero"
        value={entero}
        onChange={(e) => setEntero(e.target.value)}
      />
      <button>Añadir</button>
    </form>
  );
};

export default Formulariodecajas;

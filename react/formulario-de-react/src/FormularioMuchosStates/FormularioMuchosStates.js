import React, { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  console.table({ nombre, apellido });
  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="apellido">Apellido</label>
        <input
          type="text"
          name="apellido"
          id="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="correo">Correo</label>
        <input type="email" name="correo" id="correo" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="contraseña">Contraseña</label>
        <input type="password" name="contraseña" id="contraseña" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="confirmar-contraseña">Confirmar Contraseña</label>
        <input
          type="password"
          name="confirmar-contraseña"
          id="confirmar-contraseña"
        />
      </div>

      <button>Insbirirse</button>
    </form>
  );
};

export default Formulario;

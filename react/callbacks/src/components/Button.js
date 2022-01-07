import React from "react";

const Button = ({ label, activo, activar }) => {
  return (
    <button style={{ fontSize: "2rem" }} onClick={activar} disabled={activo}>
      {label}
    </button>
  );
};

export default Button;

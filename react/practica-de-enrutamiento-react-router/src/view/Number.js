import React from "react";
import { useParams } from "react-router-dom";

const Number = () => {
  const {
    number,
    color = "initial",
    backgroundColor = "initial",
  } = useParams();

  const msj = isNaN(number)
    ? `The word is: ${number}`
    : `The number is: ${number}`;

  return (
    <div>
      <h1 style={{ color, backgroundColor }}>{msj}</h1>
    </div>
  );
};

export default Number;

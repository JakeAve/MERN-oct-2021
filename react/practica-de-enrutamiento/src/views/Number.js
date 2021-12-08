import React from "react";

const Number = (props) => {
  const { number, backgroundColor = "none", color = "initial" } = props;

  const str = isNaN(number)
    ? `The word is: ${number}`
    : `The number is: ${number}`;

  return <h1 style={{ backgroundColor, color }}>{str}</h1>;
};

export default Number;

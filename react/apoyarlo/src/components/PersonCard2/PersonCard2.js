import React, { useState } from "react";

const Personcard2 = (props) => {
  const { firstName, lastName, hairColor, age: initialAge } = props;

  const [age, setAge] = useState(initialAge);

  const happyBirthday = () => {
    setAge((currAge) => currAge + 1);
  };

  return (
    <div>
      <h1>
        {lastName}, {firstName}
      </h1>
      <div>Age: {age}</div>
      <div>Hair color: {hairColor}</div>
      <button onClick={happyBirthday}>Happy birthday for {firstName}!</button>
    </div>
  );
};

export default Personcard2;

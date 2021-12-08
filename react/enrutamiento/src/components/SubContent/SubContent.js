import React, { /* useEffect, */ useState } from "react";
import "./styles.css";

const Subcontent = ({ numero }) => {
  const [count /* setCount */] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((c) => c + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  const focusInput = (event) => {
    const input = event.target.closest(".subcontent").querySelector("input");
    setTimeout(() => {
      input.focus();
    }, 2000);
  };

  return (
    <div className="subcontent">
      {count}
      <input value={numero} readOnly />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
};

export default Subcontent;

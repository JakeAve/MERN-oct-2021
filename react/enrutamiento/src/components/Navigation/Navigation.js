import React from "react";
// import { Link } from "@reach/router";
import { Link } from "react-router-dom";
import "./styles.css";

const Navigation = () => {
  const num1 = 24;
  const num2 = 52;
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/alpha">Alpha</Link>
        </li>
        <li>
          <Link to={`/beta/${num1}`}>Beta {num1}</Link>
        </li>
        <li>
          <Link to={`/beta/${num2}`}>Beta {num2}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

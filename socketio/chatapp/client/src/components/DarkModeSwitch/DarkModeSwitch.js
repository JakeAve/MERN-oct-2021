import "./styles.css";
import React, { useEffect, useState } from "react";

const isDefaultDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const toDarkMode = () => {
  document.body.classList.add("dark-mode");
  document.body.classList.remove("light-mode");
};

const toLightMode = () => {
  document.body.classList.add("light-mode");
  document.body.classList.remove("dark-mode");
};

export const DarkModeSwitch = () => {
  const [isInDarkMode, _setIsInDarkMode] = useState(isDefaultDark);

  const setIsInDarkMode = (valor) => {
    if (valor) toDarkMode();
    else toLightMode();
    _setIsInDarkMode(valor);
  };

  useEffect(() => {
    if (isDefaultDark) toDarkMode();
  }, []);

  return (
    <div className="dark-mode-switch" data-is-in-dark-mode={isInDarkMode}>
      <input
        className="dark-mode-check"
        type="checkbox"
        checked={isInDarkMode}
        onChange={() => setIsInDarkMode(!isInDarkMode)}
        id="dark-mode-checkbox"
      />
      <label htmlFor="dark-mode-checkbox" className="dark-mode-label">
        <span className="dark-mode-circle"></span>
        <span className="dark-mode-icon">☀️</span>
        <span className="dark-mode-icon">🌙</span>
      </label>
    </div>
  );
};

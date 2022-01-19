import { createContext, useContext, useState } from "react";

const usuarioContext = createContext("");

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState("");

  return (
    <usuarioContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </usuarioContext.Provider>
  );
};

export const useUsuario = () => useContext(usuarioContext);

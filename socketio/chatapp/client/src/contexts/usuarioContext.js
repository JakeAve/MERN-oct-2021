import { createContext, useContext, useEffect, useState } from "react";
import { getUsuario } from "../api/usuario";
import { useNavigate } from "react-router-dom";

const usuarioContext = createContext("");

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getUsuario().then(({ success, data }) => {
      if (success) {
        setUsuario(data.usuario);
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <usuarioContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </usuarioContext.Provider>
  );
};

export const useUsuario = () => useContext(usuarioContext);

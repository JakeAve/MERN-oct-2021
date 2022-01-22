import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { getUsuario } from "../api/usuario";
import { useNavigate } from "react-router-dom";
import { useSocket } from "./socketContext";

const usuarioContext = createContext("");

export const UsuarioProvider = ({ children }) => {
  const [usuario, _setUsuario] = useState("");
  const navigate = useNavigate();
  const socket = useSocket();

  const setUsuario = useCallback(
    (usuario) => {
      _setUsuario(usuario);
      socket.emit("nuevo_usuario", {
        usuario,
        hora: new Date(),
        mensaje: "{u} ha entrado el chat",
      });
    },
    [socket]
  );

  useEffect(() => {
    getUsuario().then(({ success, data }) => {
      if (success) {
        setUsuario(data.usuario);
      } else {
        navigate("/");
      }
    });
  }, [navigate, setUsuario]);

  return (
    <usuarioContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </usuarioContext.Provider>
  );
};

export const useUsuario = () => useContext(usuarioContext);

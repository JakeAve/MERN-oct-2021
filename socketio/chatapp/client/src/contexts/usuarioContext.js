import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getUsuario, logout as _logout } from "../api/usuario";
import { useLocation, useNavigate } from "react-router-dom";
import { useSocket } from "./socketContext";

const usuarioContext = createContext("");

const protectedRoutes = ["/chat"];

// const unauthenticatedRoutes = ["/login", "/signup"];

export const UsuarioProvider = ({ children }) => {
  const [usuario, _setUsuario] = useState(null);
  const navigate = useNavigate();
  const socket = useSocket();
  const { pathname } = useLocation();
  const isInProtectedRoute = useMemo(
    () => protectedRoutes.includes(pathname),
    [pathname]
  );

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

  const logout = async () => {
    const { success } = await _logout();
    setUsuario(null);
    if (success) navigate("/login");
    else window.alert("Error");
  };

  useEffect(() => {
    getUsuario().then(({ success, data }) => {
      if (success) setUsuario(data.usuario);
      else if (isInProtectedRoute) navigate("/login");
    });
  }, [navigate, setUsuario, isInProtectedRoute]);

  useEffect(() => {
    const interval = setInterval(() => {
      getUsuario().then(({ success }) => {
        if (!success && isInProtectedRoute) navigate("/login");
      });
    }, 1000 * 60 * 55);

    return () => clearInterval(interval);
  }, [setUsuario, navigate, isInProtectedRoute]);

  return (
    <usuarioContext.Provider value={{ usuario, setUsuario, logout }}>
      {children}
    </usuarioContext.Provider>
  );
};

export const useUsuario = () => useContext(usuarioContext);

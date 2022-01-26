import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./views/Login";
import Chatview from "./views/Chatview";
import { SocketProvider } from "./contexts/socketContext";
import { UsuarioProvider } from "./contexts/usuarioContext";
import { logout } from "./api/usuario";

function App() {
  const _logout = async () => {
    const { success } = await logout();
    if (success) document.location.href = "/";
    else window.alert("Error");
  };

  return (
    <>
      <BrowserRouter>
        <UsuarioProvider>
          <SocketProvider>
            <nav>
              <Link to="/">Home</Link>
              <button onClick={_logout}>Logout</button>
            </nav>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="chat" element={<Chatview />} />
            </Routes>
          </SocketProvider>
        </UsuarioProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./views/Login";
import Chatview from "./views/Chatview";
import { SocketProvider } from "./contexts/socketContext";
import { UsuarioProvider } from "./contexts/usuarioContext";

function App() {
  return (
    <>
      <UsuarioProvider>
        <SocketProvider>
          <BrowserRouter>
            <nav>
              <Link to="/">Home</Link>
            </nav>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="chat" element={<Chatview />} />
            </Routes>
          </BrowserRouter>
        </SocketProvider>
      </UsuarioProvider>
    </>
  );
}

export default App;

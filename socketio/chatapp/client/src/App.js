import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./views/Login";
import Chatview from "./views/Chatview";
import { SocketProvider } from "./contexts/socketContext";
import { UsuarioProvider } from "./contexts/usuarioContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <UsuarioProvider>
          <SocketProvider>
            <nav>
              <Link to="/">Home</Link>
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

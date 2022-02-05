import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./views/Login/Login";
import Chatview from "./views/Chatview/Chatview";
import { SocketProvider } from "./contexts/socketContext";
import { UsuarioProvider } from "./contexts/usuarioContext";
import { Signup } from "./views/Signup/Signup";
import { Titulo } from "./components/Titulo/Titulo";

function App() {
  return (
    <>
      <BrowserRouter>
        <UsuarioProvider>
          <SocketProvider>
            <Titulo />
            <main className="main">
              <Routes>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="chat" element={<Chatview />}>
                  <Route path=":salonId" element={<Chatview />} />
                </Route>
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            </main>
          </SocketProvider>
        </UsuarioProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

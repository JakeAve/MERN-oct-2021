import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Editar from './views/Editar';
import Nuevo from './views/Nuevo';
import Home from './views/Home';
import NoEncontrado from './views/NoEncontrado';

function App() {
  return (
    <>
      <h1>Autores favoritos</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="nuevo" element={<Nuevo />} />
          <Route path="editar/:id" element={<Editar />} />
          <Route path="no-encontrado" element={<NoEncontrado />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

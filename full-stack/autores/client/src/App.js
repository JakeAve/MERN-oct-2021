import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Edit from './views/Editar';
import New from './views/Nuevo';
import Home from './views/Home';
import NoEncontrado from './views/NoEncontrado';

function App() {
  return (
    <>
      <h1>Autores favoritos</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="nuevo" element={<New />} />
          <Route path="editar/:id" element={<Edit />} />
          <Route path="no-econtrado" element={<NoEncontrado />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

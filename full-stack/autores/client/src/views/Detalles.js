import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerAutor } from '../api/Autor';
import Formulariodepremios from '../components/FormularioDePremios/FormularioDePremios';
import Nav from '../components/Nav/Nav';
import NotFound from './NoEncontrado';

export default function Detalles() {
  const [autor, setAutor] = useState(null);
  const [existe, setExiste] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    obtenerAutor(id).then(({ data, success }) => {
      setAutor(data);
      if (!success) setExiste(false);
    });
  }, [id]);

  if (!existe) return <NotFound />;

  if (!autor) return <h2>Loading...</h2>;

  return (
    <>
      <Nav links={[{ text: 'Página principal', to: '/' }]} />
      <main>
        <h2>Editar este autor:</h2>
        <Formulariodepremios {...autor} />
      </main>
    </>
  );
}

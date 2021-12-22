import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { obtenerAutor } from '../api/Autor';
import FormularioDeAutor from '../components/FormularioDeAutor/FormularioDeAutor';
import Nav from '../components/Nav/Nav';

export default function Edit() {
  const [autor, setAutor] = useState(null);
  const [existe, setExiste] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    obtenerAutor(id).then(({ data }) => {
      setAutor(data);
      if (!data) setExiste(false);
    });
  }, [id]);

  if (!existe) navigate('/no-encontrado');

  return (
    <>
      <Nav links={[{ text: 'Página principal', to: '/' }]} />
      <main>
        <h2>Editar este autor:</h2>
        <FormularioDeAutor valoresDeEfecto={autor} />
      </main>
    </>
  );
}

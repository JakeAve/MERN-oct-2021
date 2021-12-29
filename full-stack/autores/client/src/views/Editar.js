import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editarAutor, obtenerAutor } from '../api/Autor';
import FormularioDeAutor from '../components/FormularioDeAutor/FormularioDeAutor';
import Nav from '../components/Nav/Nav';
import NotFound from './NoEncontrado';

export default function Edit() {
  const [autor, setAutor] = useState(null);
  const [existe, setExiste] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    obtenerAutor(id).then(({ data, success }) => {
      setAutor(data);
      if (!success) setExiste(false);
    });
  }, [id]);

  if (!existe) return <NotFound />;

  const editar = async (datosDelFormulario) => {
    await editarAutor(id, datosDelFormulario);
    navigate('/');
  };

  return (
    <>
      <Nav links={[{ text: 'Página principal', to: '/' }]} />
      <main>
        <h2>Editar este autor:</h2>
        <FormularioDeAutor valoresDeEfecto={autor} onSubmitCallback={editar} />
      </main>
    </>
  );
}

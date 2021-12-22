import React from 'react';
import { useNavigate } from 'react-router-dom';
import { crearAutor } from '../api/Autor';
import FormularioDeAutor from '../components/FormularioDeAutor/FormularioDeAutor';
import Nav from '../components/Nav/Nav';

export default function New() {
  const navigate = useNavigate();

  const crear = async (data) => {
    const { success } = await crearAutor(data);
    if (success) navigate('/');
    else window.alert('Error al crear el autor');
  };

  return (
    <>
      <Nav links={[{ text: 'Página principal', to: '/' }]} />
      <main>
        <h2>Crear un autor:</h2>
        <FormularioDeAutor onSubmitCallback={crear} />
      </main>
    </>
  );
}

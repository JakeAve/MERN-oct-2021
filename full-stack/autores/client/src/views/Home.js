import React from 'react';
import Nav from '../components/Nav/Nav';
import TablaDeAutores from '../components/TablaDeAutores/TablaDeAutores';

export default function Home() {
  return (
    <>
      <Nav
        links={[
          { text: 'Añadir un nuevo autor', to: '/nuevo' },
          { text: 'No Encontrado', to: '/no-encontrado' },
        ]}
      />
      <main>
        <h2>Lista de autores:</h2>
        <TablaDeAutores />
      </main>
    </>
  );
}

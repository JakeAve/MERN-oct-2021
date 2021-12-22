import React from 'react';
import Nav from '../components/Nav/Nav';

export default function NotFound() {
  return (
    <>
      <Nav links={[{ text: 'Página principal', to: '/' }]} />
      <main>
        <h2>No encontrado</h2>
      </main>
    </>
  );
}

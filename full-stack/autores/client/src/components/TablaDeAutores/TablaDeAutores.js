import './TablaDeAutores.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { eliminarAutor, obtenerAutores } from '../../api/Autor';

const Fila = ({ name, _id, eliminar }) => {
  return (
    <tr>
      <td>
        <Link to={`/detalles/${_id}`}>{name}</Link>
      </td>
      <td className="cedula-de-acciones">
        <Link to={`/editar/${_id}`}>editar</Link>
        <button onClick={() => eliminar(_id, name)}>eliminar</button>
      </td>
    </tr>
  );
};

export default function TablaDeAutores() {
  const [autores, setAutores] = useState([]);
  const [eliminación, setEliminar] = useState(0);

  const eliminar = async (id, name) => {
    const confirmado = window.confirm(
      `¿Está seguro que desea eliminar ${name}?`,
    );
    if (confirmado) {
      const { success } = await eliminarAutor(id);
      if (success) setEliminar((exis) => exis + 1);
      else window.alert('Error al eliminar el autor');
    }
  };

  useEffect(() => {
    obtenerAutores().then(({ data }) => {
      data.sort((a, b) => a.name.localeCompare(b.name)); // ordena alfabeticamente
      setAutores(data);
    });
  }, [eliminación]);

  return (
    <table className="tabla-de-autores">
      <thead>
        <tr>
          <th>Autor</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {autores.map(({ name, _id }) => (
          <Fila key={_id} name={name} _id={_id} eliminar={eliminar} />
        ))}
      </tbody>
    </table>
  );
}

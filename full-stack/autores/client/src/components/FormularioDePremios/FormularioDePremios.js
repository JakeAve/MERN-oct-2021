import React, { Fragment } from 'react';
import { ganaPremio } from '../../api/Autor';

const Formulariodepremios = (props) => {
  const { premios, name, _id } = props;
  return (
    <div>
      <h2>Premios de {name}</h2>
      {premios.map(({ nombre, vecesGanado = 0 }, index) => {
        return (
          <Fragment key={index}>
            Ya ha ganado {vecesGanado} veces.
            <button onClick={() => ganaPremio(_id, index)}>
              Gana {nombre} otra vez
            </button>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Formulariodepremios;

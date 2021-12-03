import React from 'react'
import Quehacer from '../Quehacer/Quehacer'

const Lista = (props) => {
  const { listaDeQuehaceres = [] } = props

  const quehaceres = listaDeQuehaceres.map((props) => (
    <Quehacer key={props.id} {...props} />
  ))

  return <div>{quehaceres}</div>
}

export default Lista

import React from 'react'
import useForm from './hooks/useForm'

const Formulario = (props) => {
  const { añadirQuehacer, userName, nuevoQuehacer, setNuevoQuehacer } =
    useForm(props)

  return (
    <form onSubmit={añadirQuehacer}>
      <label htmlFor="nuevo-quehacer">
        Añadir un nuevo quehacer a la lista {userName}
      </label>
      <input
        type="text"
        id="nuevo-quehacer"
        value={nuevoQuehacer}
        onChange={(e) => setNuevoQuehacer(e.target.value)}
      />
      <button>Añadir</button>
    </form>
  )
}

export default Formulario

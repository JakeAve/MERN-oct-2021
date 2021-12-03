import React, { useState } from 'react'
import { useUser } from '../../providers/UserProvider'
import './styles.css'

const Quehacer = (props) => {
  const [state, setState] = useState(props)
  const { userName } = useUser()

  if (state.borrado) return null

  const chequear = () => {
    setState({ ...state, cumplido: !state.cumplido })
    if (!state.cumplido) window.alert(`Bien hecho, ${userName}`)
  }
  const borrar = () => setState({ ...state, borrado: true })

  return (
    <div className="quehacer">
      <label htmlFor={state.id} className={state.cumplido ? 'recortar' : ''}>
        {state.texto}
      </label>
      <input
        type="checkbox"
        id={state.id}
        checked={state.cumplido}
        onChange={chequear}
      />
      <button onClick={borrar}>Borrar</button>
    </div>
  )
}

export default Quehacer

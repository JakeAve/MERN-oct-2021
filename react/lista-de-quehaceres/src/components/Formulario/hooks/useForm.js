import { useState } from 'react/cjs/react.development'
import { useUser } from '../../../providers/UserProvider'

const useForm = (props) => {
  const { enviarNuevoQuehacer } = props
  const [nuevoQuehacer, setNuevoQuehacer] = useState('')

  const añadirQuehacer = (e) => {
    e.preventDefault()
    if (!nuevoQuehacer.trim())
      return window.alert('Tienes que subir algo mejor')
    enviarNuevoQuehacer(nuevoQuehacer.trim())
    setNuevoQuehacer('')
  }

  const { userName } = useUser()

  return { userName, añadirQuehacer, nuevoQuehacer, setNuevoQuehacer }
}

export default useForm

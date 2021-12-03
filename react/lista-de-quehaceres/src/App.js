import { useState } from 'react'
import './App.css'
import Changeusername from './components/ChangeUserName/ChangeUserName'
import Formulario from './components/Formulario/Formulario'
import Lista from './components/Lista/Lista'
import { UserProvider } from './providers/UserProvider'
import { uuidv4 } from './utils/uuidv4'

function App() {
  const [quehaceres, setQuehaceres] = useState([])

  const añadirAListaDeQuehaceres = (texto) => {
    const nuevoQuehacer = {
      texto,
      cumplido: false,
      borrado: false,
      id: uuidv4(),
    }

    setQuehaceres([...quehaceres, nuevoQuehacer])
  }

  return (
    <UserProvider>
      <Lista listaDeQuehaceres={quehaceres} />
      <Formulario enviarNuevoQuehacer={añadirAListaDeQuehaceres} />
      <Changeusername />
    </UserProvider>
  )
}

export default App

import { createContext, useState } from 'react'
import { useContext } from 'react/cjs/react.development'

const userContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('Mr Miyagi')
  return (
    <userContext.Provider value={{ userName, setUserName }}>
      {children}
    </userContext.Provider>
  )
}

export const useUser = () => useContext(userContext)

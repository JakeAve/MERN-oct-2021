import React from 'react'
import { useUser } from '../../providers/UserProvider'

const Changeusername = () => {
  const { setUserName, userName } = useUser()
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const newName = formData.get('userName')
        setUserName(newName)
      }}
    >
      <label>
        Cambiar userName
        <input name="userName" defaultValue={userName} />
      </label>

      <button>Cambiar</button>
    </form>
  )
}

export default Changeusername

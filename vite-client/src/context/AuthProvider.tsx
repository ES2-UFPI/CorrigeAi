import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'

import { IUser } from './AuthContext'

interface Props {
  children: React.ReactNode
}

export const AuthContextProvider : React.FC<Props> = ({children}) => {
  const [signed, setSigned] = useState(false)
  const [user, setUser] = useState<IUser | null>(null)

  return (
    <AuthContext.Provider value={{
      user,
      setUser,
      signed,
      setSigned,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

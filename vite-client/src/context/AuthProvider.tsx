import { useState } from 'react'
import { AuthContext } from './AuthContext'

import { IUser } from './AuthContext'

interface Props {
  children: React.ReactNode
}

export const AuthContextProvider : React.FC<Props> = ({children}) => {
  const [signed, setSigned] = useState(false)
  const [user, setUser] = useState<IUser | null>(null)

  function signIn() {
    //lógica para autenticar o usuário
    setUser({ name: "John Doe", typeUser: 'teacher', email: "johndoe@example.com" });
    setSigned(true);
  }

  function signOut() {
   //lógica para deslogar o usuário
    setUser(null);
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{user, signed, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

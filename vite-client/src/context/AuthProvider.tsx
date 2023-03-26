import { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'

import { IUser, ITeacher, IStudent } from './AuthContext'

interface Props {
  children: React.ReactNode
}

export const AuthContextProvider : React.FC<Props> = ({children}) => {
  const [signed, setSigned] = useState(false)
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => { //Recupera o user do local storage
    const storedUser = localStorage.getItem('user');
    const storeSigned = localStorage.getItem('signed')

    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }

    if (storeSigned){
      setSigned(JSON.parse(storeSigned))
    }
  }, []);

  async function signIn(email: string) {
    const response = await fetch(`http://localhost:3000/searchByEmail?email=${email}`);
    const data = await response.json();   
  
    // Mensagem de alerta se nao tiver ninguém com esse email cadastrado
    if(!data.professor && !data.student){
      alert(data.message)
      return false
    }

    if (data.professor != null) {
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("signed", JSON.stringify(true));
      return true
    }

    if (data.student != null){
      localStorage.setItem("user", JSON.stringify(data))
      localStorage.setItem("signed", JSON.stringify(true));
      return true
    }
    return false
  }

  function signOut() {
    //lógica para deslogar o usuário
    localStorage.setItem("signed", JSON.stringify(false));
    localStorage.setItem("user", JSON.stringify(null))
    setUser(null);
    setSigned(false);   
   }

  return (
    <AuthContext.Provider value={{
      user,
      setUser,
      // Teacher,
      // setTeacher,
      // Student,
      // setStudent,
      signed,
      setSigned,
      signIn,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

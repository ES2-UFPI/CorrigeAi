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
    if (storedUser) {
      const userData = JSON.parse(storedUser)

      async function setValueUser(){
        if (userData.professor){
          const user = await userData.professor
          setUser({
            email: user.email,
            name: user.name,
            typeUser: 'teacher'
          });
        }else {
          const user = await userData.student
          setUser({
            email: user.email,
            name: user.name,
            typeUser: 'student'
          });
        }
      }
      setValueUser()
    }
  }, []);

  // useEffect(() => {  //Atualiza o local storage
  //   localStorage.setItem("user", JSON.stringify(user));
  //   console.log('alter')
  // }, [user]);
  // const [Teacher, setTeacher] = useState<ITeacher | null>(null)
  // const [Student, setStudent] = useState<ITeacher | null>(null)

  // const navigate = useNavigate()
  
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
      // await setUser({
      //   email: data.professor.email,
      //   name: data.professor.name,
      //   typeUser: 'teacher'
      // })
      return true
    }

    if (data.student != null){
      localStorage.setItem("user", JSON.stringify(data))
      // await setUser({
      //   email: data.student.email,
      //   name: data.student.name,
      //   typeUser: 'student'
      // })
      
      return true
    }
    return false
  }

  function signOut() {
    //lógica para deslogar o usuário
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

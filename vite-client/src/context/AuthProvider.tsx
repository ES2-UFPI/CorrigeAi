import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'

import { IUser, ITeacher, IStudent } from './AuthContext'


interface Props {
  children: React.ReactNode
}

export const AuthContextProvider : React.FC<Props> = ({children}) => {
  const [signed, setSigned] = useState(false)
  const [user, setUser] = useState<IUser | null>(null)
  const [Teacher, setTeacher] = useState<ITeacher | null>(null)
  const [Student, setStudent] = useState<ITeacher | null>(null)


  return (
    <AuthContext.Provider value={{
      user,
      setUser,
      Teacher,
      setTeacher,
      Student,
      setStudent,
      signed,
      setSigned,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

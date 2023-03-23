import { useContext } from 'react'

import { HomeTeacher } from '../Teacher/HomeTeacher'
import { HomeStudent } from '../Student/HomeStudent'

import { AuthContext } from '../../context/AuthContext'

export function Home() {
  const { user } = useContext(AuthContext)

  return (
    <div>
      {user?.typeUser === 'teacher' ? (
        <HomeTeacher />
      ) : (
        <HomeStudent />
      )}
    </div>
  )
}

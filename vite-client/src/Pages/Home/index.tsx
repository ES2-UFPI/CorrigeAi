import { useContext, useState } from 'react'

import { HomeTeacher } from '../Teacher/HomeTeacher'
import { HomeStudent } from '../Student/HomeStudent'

import { AuthContext, IUser } from '../../context/AuthContext'

export function Home() {
  const { user } = useContext(AuthContext)

  return (
    <div>
      {user?.typeUser === 'teacher' ? (
        <HomeTeacher />
      ) : (
        <HomeStudent />
      )}
      <h1>teste{user?.typeUser}</h1>
    </div>
  )
}

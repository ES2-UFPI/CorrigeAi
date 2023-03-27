import { useContext, useEffect, useState } from 'react'

import { HomeTeacher } from '../Teacher/HomeTeacher'
import { HomeStudent } from '../Student/HomeStudent'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export function Home() {
  //User não esta sendo atualizado para renderizar o componente adequado
  const { signed, user, signIn, signOut } = useContext(AuthContext)

  return (
    <div>
      {user?.professor ? <HomeTeacher /> : <HomeStudent />}
    </div>
  )
}

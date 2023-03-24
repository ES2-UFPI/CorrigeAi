import { useContext, useState } from 'react'

import { HomeTeacher } from '../Teacher/HomeTeacher'
import { HomeStudent } from '../Student/HomeStudent'

import { AuthContext, IUser } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'

export function Home() {
  const { user, signed } = useContext(AuthContext)

  console.log(user)
  return (
    <div>
      { signed ? (
        user?.typeUser === 'teacher' ? (
          <HomeTeacher />
          ) : (
          <HomeStudent />
        )
        ): <Navigate to='/login'/>
      }
    </div>
  )
}

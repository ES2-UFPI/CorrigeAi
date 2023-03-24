import { useContext, useEffect, useState } from 'react'

import { HomeTeacher } from '../Teacher/HomeTeacher'
import { HomeStudent } from '../Student/HomeStudent'

import { AuthContext, IUser } from '../../context/AuthContext'
import { RedirectLogin } from '../../components/Redirect'

export function Home() {
  const { user, signed } = useContext(AuthContext)

  console.log(user, signed)
  return (
    <div>
      { signed ? (
        user?.typeUser === 'teacher' ? (
          <HomeTeacher />
          ) : (
          <HomeStudent />
        )
        ): <RedirectLogin />
      }
    </div>
  )
}

import { useContext, useEffect, useState } from 'react'

import { ViewAvaliationsTeacher } from '../Teacher/ViewAvaliationsTeacher'
import { ViewAvaliationsStudent } from '../Student/ViewAvaliationsStudent'
import { AuthContext } from '../../context/AuthContext'

export function ViewAvaliations() {
  const { signed, user, signIn, signOut } = useContext(AuthContext)

  return (
    <div>
      {user?.professor ? <ViewAvaliationsTeacher /> : <ViewAvaliationsStudent />}
    </div>
  )
}


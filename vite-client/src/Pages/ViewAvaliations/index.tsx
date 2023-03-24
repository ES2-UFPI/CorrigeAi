import { useContext } from 'react'

import { AuthContext } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'
import { ViewAvaliationsTeacher } from '../Teacher/ViewAvaliationsTeacher'
import { ViewAvaliationsStudent } from '../Student/ViewAvaliationsStudent'

export function ViewAvaliations() {
  const { user, signed } = useContext(AuthContext)

  return (
    <div>
      { signed ? (
        user?.typeUser === 'teacher' ? (
          <ViewAvaliationsTeacher />
          ) : (
          <ViewAvaliationsStudent />
        )
        ): <Navigate to='/login'/>
      }
    </div>
  )
}

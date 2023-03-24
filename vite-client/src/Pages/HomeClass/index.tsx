import { useContext } from 'react'

import { AuthContext } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'
import { HomeclassTeacher } from '../Teacher/HomeClassTeacher'
import { HomeclassStudent } from '../Student/HomeClassStudent'

export function HomeClass() {
  const { user, signed } = useContext(AuthContext)

  return (
    <div>
      { signed ? (
        user?.typeUser === 'teacher' ? (
          <HomeclassTeacher />
          ) : (
          <HomeclassStudent />
        )
        ): <Navigate to='/login'/>
      }
    </div>
  )
}

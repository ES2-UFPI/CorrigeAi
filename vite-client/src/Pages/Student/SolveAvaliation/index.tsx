import { useContext } from 'react'

import { AuthContext } from '../../../context/AuthContext'
import { Navigate } from 'react-router-dom'
import { SolveAvaliationStudent } from '../SolveAvaliationStudent'
import { SolveAvaliationTeacher } from '../../Teacher/SolveAvaliationTeacher'

export function SolveAvaliation() {
  const { user, signed } = useContext(AuthContext)

  return (
    <div>
      { signed ? (
        user?.typeUser === 'teacher' ? (
            <SolveAvaliationTeacher />
          ) : (
            <SolveAvaliationStudent />
          )
        ): <Navigate to='/login'/>
      }
    </div>
  )
}

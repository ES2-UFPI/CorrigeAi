import { useContext, useEffect, useState } from 'react'

import { HomeclassTeacher } from '../Teacher/HomeClassTeacher'
import { HomeclassStudent } from '../Student/HomeClassStudent'
import { AuthContext } from '../../context/AuthContext'

export function HomeClass() {
  const { user } = useContext(AuthContext)

  return (
    <div>{user?.professor ? <HomeclassTeacher /> : <HomeclassStudent />}</div>
  )
}

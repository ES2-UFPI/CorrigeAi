import { useContext, useEffect, useState } from 'react'

import { HomeTeacher } from '../Teacher/HomeTeacher'
import { HomeStudent } from '../Student/HomeStudent'

import { AuthContext, IUser } from '../../context/AuthContext'
import { RedirectLogin } from '../../components/Redirect'

export function Home() {
  const [user, setUser] = useState(getUserFromLocalStorage());
  // const { user, signed } = useContext(AuthContext)

  function getUserFromLocalStorage() {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  useEffect(() => {
    const updatedUser = getUserFromLocalStorage();
    if (updatedUser !== user) {
      setUser(updatedUser);
    }
  }, []);

  console.log(user)
  return (
    <div>
      {user.professor ? (
        <HomeTeacher />
      ): (
        <HomeStudent />
      )}
    </div>
  )
}

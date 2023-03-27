import { useContext, useEffect, useState } from 'react'

import { HomeTeacher } from '../Teacher/HomeTeacher'
import { HomeStudent } from '../Student/HomeStudent'
import { AuthContext } from '../../context/AuthContext';

export function Home() {
  //User não esta sendo atualizado para renderizar o componente adequado
  const { signed } = useContext(AuthContext)

  const [user, setUser] = useState(getUserFromLocalStorage());

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

import { useContext, useEffect, useState } from 'react'

import { ViewAvaliationsTeacher } from '../Teacher/ViewAvaliationsTeacher'
import { ViewAvaliationsStudent } from '../Student/ViewAvaliationsStudent'

export function ViewAvaliations() {
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
      {user?.professor ? (
        <ViewAvaliationsTeacher />
      ): ( 
        <ViewAvaliationsStudent />
      )}
    </div>
  )
}


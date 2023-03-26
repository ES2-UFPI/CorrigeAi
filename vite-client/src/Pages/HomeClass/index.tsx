import { useContext, useEffect, useState } from 'react'

import { HomeclassTeacher } from '../Teacher/HomeClassTeacher'
import { HomeclassStudent } from '../Student/HomeClassStudent'

export function HomeClass() {
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
        <HomeclassTeacher />
      ): ( 
        <HomeclassStudent />
      )}
    </div>
  )
}

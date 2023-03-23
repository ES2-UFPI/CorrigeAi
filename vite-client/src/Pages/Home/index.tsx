import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

export function Home(){
  const { signed } = useContext(AuthContext)
  return (
    <div>
      {signed ? (
        <div>
          <h1>Home Page</h1> 
          <p>Vai renderizar Home Page proff ou Aluno</p>
        </div>
      ) : ( 
        <div>
          <h1>Login</h1> 
          <p>Opção 1 Proff</p>
          <p>Opção 2 Aluno</p>
        </div>
      )}
    </div>
  )
}
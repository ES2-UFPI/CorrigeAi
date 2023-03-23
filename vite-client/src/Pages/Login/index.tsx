import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LogoCorrigeAi } from "../../components/LogoCorrigeAi"
import { AuthContext } from "../../context/AuthContext"
import { Wrapper } from "../../styles/Layout"

import { Form, LoginForm, StyledButton, StyledLoginForm } from "./styles"

export function Login(){
  const { user, setUser, signed, setSigned } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  
  function signIn(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    //Buscando usuario, para depois setar no user
    //...
    e.preventDefault()
    setUser({ name: 'Jon Kleber', email: "johndoe@example.com", typeUser: 'teacher' });
    
    //lógica para autenticar o usuário
    if (user?.email === 'johndoe@example.com'){
      setSigned(true)
      if (user.typeUser === 'teacher'){
        navigate('/home-teacher')
      }else {
        navigate('/home-student')
      }
    }else {
      alert('Usuario não encontrado')
    }
  }

  function signOut() {
   //lógica para deslogar o usuário
    setUser(null);
    setSigned(false);
  }

  return (
    <>
      <StyledLoginForm>
        <Wrapper>
          <LogoCorrigeAi />
          <Form>
            <LoginForm>
              <legend>
                <h1>Login</h1>
              </legend>

              <label htmlFor="email">Email: </label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="password">Senha: </label>
              <input 
                type="password" 
                value={password}
                onChange={ e => setPassword(e.target.value)}
              />
              <StyledButton
                onClick={ e => signIn(e) }
              >
                Entrar
              </StyledButton>
            </LoginForm>
          </Form>
        </Wrapper>
      </StyledLoginForm>
    </>
  )
}
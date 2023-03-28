import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LogoCorrigeAi } from "../../components/LogoCorrigeAi"
import { AuthContext } from "../../context/AuthContext"
import { Wrapper } from "../../styles/Layout"

import { Form, LoginForm, StyledButton, StyledLoginForm } from "./styles"

export function Login(){
  const { setUser, setSigned, user, signIn, signOut, signed } = useContext(AuthContext)

  console.log(user, signed)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    signOut()
  }, [])

  async function handleLogin(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault()
    if (await signIn(email)){
      setSigned(true)
      navigate('/home')
    }else {
      navigate('/login')
    }
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
                onChange={ e => setEmail(e.target.value) }
              />

              <label htmlFor="password">Senha: </label>
              <input 
                type="password" 
                value={password}
                onChange={ e => setPassword(e.target.value) }
              />
              <StyledButton
                onClick={ e => handleLogin(e) }
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


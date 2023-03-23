import { useContext, useState } from "react"
import { LogoCorrigeAi } from "../../components/LogoCorrigeAi"
import { AuthContext } from "../../context/AuthContext"
import { Wrapper } from "../../styles/Layout"

import { Form, LoginForm, StyledButton, StyledLoginForm } from "./styles"

export function Home(){
  const { signed, signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignIn(){
    signIn(email, password)
  }

  return (
    <div>
      {signed ? (
        <div>
          <h1>Home Page</h1> 
          <p>Vai renderizar Home Page proff ou Aluno</p>
        </div>
      ) : ( 
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
                  onClick={handleSignIn}
                >
                  Entrar
                </StyledButton>
              </LoginForm>
            </Form>
          </Wrapper>
        </StyledLoginForm>
      )}
    </div>
  )
}
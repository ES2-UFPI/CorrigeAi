import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LogoCorrigeAi } from "../../components/LogoCorrigeAi"
import { AuthContext } from "../../context/AuthContext"
import { Wrapper } from "../../styles/Layout"

import { Form, LoginForm, StyledButton, StyledLoginForm } from "./styles"


export function Login(){

  const { Teacher, Student , setTeacher, setStudent,user, setUser, signed, setSigned } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  
  async function signIn(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()

    const response = await fetch(`http://localhost:3000/searchByEmail?email=${email}`);
    const data = await response.json();   

    // Mensagem de alerta se nao tiver ninguém com esse email cadastrado
    if(!data.professor && !data.student){
      alert(data.message)
    }

    if (data.professor != null) {
      setSigned(true)
      setUser({
        email: data.professor.email,
        name: data.professor.name,
        typeUser: 'teacher'
      })

      navigate('/home')
    }

    if (data.student != null){
      setSigned(true)
      setUser({
        email: data.student.email,
        name: data.student.name,
        typeUser: 'student'
      })

      navigate('/home')
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
                onChange={ e => setEmail(e.target.value) }
              />

              <label htmlFor="password">Senha: </label>
              <input 
                type="password" 
                value={password}
                onChange={ e => setPassword(e.target.value) }
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
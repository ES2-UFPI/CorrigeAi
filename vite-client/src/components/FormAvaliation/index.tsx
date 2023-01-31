import { Form } from "./styles"

import { CreateQuestions } from "../../Pages/CreateQuestions"

export interface Props {
  typeAvaliation : string
}

export function FormAvaliation( {typeAvaliation} : Props) {
  return (
    <>
      {
        //Formulario para criar prova
        typeAvaliation === 'exam' ? 
          <Form onSubmit={ e => e.preventDefault() } >
            <legend>
              <h2>Cadastro de prova</h2>
            </legend>

            <label htmlFor="themeExam">Tema da prova: </label>
            <input type="text" id="themeExam" name="themeExam"/>
            
            <br />
            <label htmlFor="initialDateExam">Data de inicio: </label>
            <input type="date" name="initialDateExam" id="initialDateExam" />              

            <label htmlFor="finalDateExam">Até: </label>
            <input type="date" name="finalDateExam" id="finalDateExam" />              
            <br />

            <label htmlFor="time">Prazo: </label>
            <input type="time" />
            <br />

            <label htmlFor="points">Pontuação: </label>
            <input type="number" name="points" id="points" />
            <br />
            <button type="submit">Iniciar questões</button>
            {/* Redirecionar para o componente que vai gerar as questões*/}
            <CreateQuestions typeAvaliation={typeAvaliation}/>
          </Form>
        :
        // Formulario para criar tarefa 
          <Form onSubmit={ e => e.preventDefault() } >
            <legend>
              <h2>Cadastro de tarefa</h2>
            </legend>

            <label htmlFor="themeTask">Tema da atividade: </label>
            <input type="text" id="themeTask" name="themeTask"/>
            
            <br />
            <label htmlFor="initialDateTask">Data de inicio: </label>
            <input type="date" name="initialDateTask" id="initialDateTask" />              

            <label htmlFor="finalDateTask">Até: </label>
            <input type="date" name="finalDateTask" id="finalDateTask" />              
            <br />

            <button type="submit">Iniciar questões</button>
            <CreateQuestions typeAvaliation={typeAvaliation}/>
          </Form>
      } 
    </>
  )
}
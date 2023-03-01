import { useState, useContext } from 'react'

import { Form } from "./styles"

import { CreateQuestions } from "../CreateQuestions"
import { PropsQuestions } from '../GenerateQuestions'
import { ContextQuestions } from '../../context/contextQuestions'

export interface PropsForm {
  typeAvaliation: string
  themeExam?: string
  questions?: PropsQuestions[]
  initialExam?: string
  finalExam?: string
  time?: string
  points?: number
}

export function FormAvaliation( {typeAvaliation, ...props} : PropsForm ) {
  
  // Array para armazenar todas questões, e informações do forumario
  const { questions } = useContext(ContextQuestions)
  const [themeExam, setThemeExam] = useState('')
  const [finalExam, setFinalExam] = useState('')
  const [initialExam, setInitialExam] = useState('')
  const [points, setPoints] = useState(0)
  const [time, setTime] = useState('')

  const initialForm : PropsForm = {
    typeAvaliation,
    finalExam,
    initialExam,
    points,
    questions,
    themeExam,
    time
  }

  // const [formData, setFormData] = useState<PropsForm>(initialForm) 
  function handleSaveQuestion() {
    // Vai lidar com o armazenamento das questões no state
    console.log(initialForm)
  }
  
  return (
    <>
      {
        //Formulario para criar prova
        typeAvaliation === 'exam' ? 
          <Form className="Form-avaliation" onSubmit={ e => e.preventDefault() } >
            <legend>
              <h2>Cadastro de prova</h2>
            </legend>

            <label htmlFor="themeExam">Tema da prova: </label>
            <input 
              type="text" 
              id="themeExam" 
              name="themeExam" 
              value={themeExam} 
              onChange={ e => setThemeExam(e.target.value) }
            />
            
            <br />
            <label htmlFor="initialDateExam">Data de inicio: </label>
            <input 
              type="date" 
              name="initialDateExam" 
              id="initialDateExam" 
              value={initialExam} 
              onChange={ e => setInitialExam(e.target.value) }
            />              

            <label htmlFor="finalDateExam">Até: </label>
            <input 
              type="date" 
              name="finalDateExam" 
              id="finalDateExam" 
              value={finalExam}
              onChange={ e => setFinalExam(e.target.value) }  
            />              
            <br />

            <label htmlFor="time">Prazo: </label>
            <input 
              type="time" 
              value={time}
              onChange={ e => setTime(e.target.value) }  
            />
            <br />

            <label htmlFor="points">Pontuação: </label>
            <input 
              type="number" 
              name="points" 
              id="points" 
              onChange={ e => setPoints(Number(e.target.value)) }
            />
            <br />

            <CreateQuestions 
              typeAvaliation={typeAvaliation}
            />
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

            <CreateQuestions 
              typeAvaliation={typeAvaliation}
            />
          </Form>
      }
      <button onClick={handleSaveQuestion}>
        Salvar prova
      </button>
    </>
  )
}
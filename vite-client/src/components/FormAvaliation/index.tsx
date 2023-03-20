import { useState, useContext } from 'react'

import { ButtonSave, Form } from './styles'
import { Link } from 'react-router-dom'
import { CreateQuestions } from '../CreateQuestions'
import { PropsQuestions } from '../GenerateQuestions'
import { ContextQuestions } from '../../context/contextQuestions'
import { Wrapper } from '../../styles/Layout'

export interface PropsForm {
  typeAvaliation?: string
  themeAvaliation?: string
  questions?: PropsQuestions[]
  initialAvaliation?: string
  finalAvaliation?: string
  time?: string
  points?: number
}

export function FormAvaliation({ typeAvaliation, ...props }: PropsForm) {
  // Array para armazenar todas questões, e informações do forumario
  const { questions } = useContext(ContextQuestions)
  const [themeAvaliation, setThemeAvaliation] = useState('')
  const [finalAvaliation, setFinalAvaliation] = useState('')
  const [initialAvaliation, setInitialAvaliation] = useState('')
  const [points, setPoints] = useState(0)
  const [time, setTime] = useState('00:00')

  const initialForm: PropsForm = {
    typeAvaliation,
    finalAvaliation,
    initialAvaliation,
    points,
    questions,
    themeAvaliation,
    time
  }

  // const [formData, setFormData] = useState<PropsForm>(initialForm)
  const handleSubmit = async () => {
    if (
      themeAvaliation === '' ||
      finalAvaliation === '' ||
      initialAvaliation === '' ||
      points === 0
    ) {
      alert('Preencha todos os campos para continuar')
      return
    }

    if (questions.length === 0) {
      alert('Adicione pelo menos uma questão')
      return
    }

    fetch('http://localhost:3000/createAvaliation', {
      method: 'POST',
      body: JSON.stringify(initialForm),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(initialForm)
  }

  return (
    <>
      {
        //Formulario para criar prova
        typeAvaliation === 'exam' ? (
          <Form className="Form-avaliation" onSubmit={e => e.preventDefault()}>
            <legend>
              <h2>Cadastro de prova</h2>
            </legend>

            <label htmlFor="themeExam">Tema da prova: </label>
            <input
              type="text"
              id="themeExam"
              name="themeExam"
              value={themeAvaliation}
              placeholder='Tema da prova'
              onChange={e => setThemeAvaliation(e.target.value)}
            />

            <label htmlFor="initialDateExam">Data de inicio: </label>
            <input
              type="date"
              name="initialDateExam"
              id="initialDateExam"
              value={initialAvaliation}
              onChange={e => setInitialAvaliation(e.target.value)}
            />

            <label htmlFor="finalDateExam">Até: </label>
            <input
              type="date"
              name="finalDateExam"
              id="finalDateExam"
              value={finalAvaliation}
              onChange={e => setFinalAvaliation(e.target.value)}
            />

            <label htmlFor="time">Prazo: </label>
            <input
              type="number"
              min="0"
              max="24"
              value={time}
              placeholder='Tempo para realizar a prova'
              onChange={e => setTime(e.target.value)}
            />

            <label htmlFor="points">Pontuação: </label>
            <input
              type="number"
              name="points"
              id="points"
              placeholder='Pontuação da prova'
              onChange={e => setPoints(Number(e.target.value))}
            />
            <hr />
            <CreateQuestions typeAvaliation={typeAvaliation} />
          </Form>
        ) : (
          // Formulario para criar tarefa
          <Form onSubmit={e => e.preventDefault()}>
            <legend>
              <h2>Cadastro de tarefa</h2>
            </legend>

            <label htmlFor="themeTask">Tema da atividade: </label>
            <input
              type="text"
              id="themeTask"
              name="themeTask"
              placeholder='Tema da atividade'
              onChange={e => setThemeAvaliation(e.target.value)}
            />

            <label htmlFor="initialDateTask">Data de inicio: </label>
            <input
              type="date"
              name="initialDateTask"
              id="initialDateTask"
              onChange={e => setInitialAvaliation(e.target.value)}
            />

            <label htmlFor="finalDateTask">Até: </label>
            <input
              type="date"
              name="finalDateTask"
              id="finalDateTask"
              onChange={e => setFinalAvaliation(e.target.value)}
            />
            <hr />
            <CreateQuestions typeAvaliation={typeAvaliation} />
          </Form>
        )
      }
        <Link 
          to="/" 
          onClick={handleSubmit}
        >
          <ButtonSave>
            Salvar
          </ButtonSave>
        </Link>
    </>
  )
}

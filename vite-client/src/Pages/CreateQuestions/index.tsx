import { useState } from "react"

import { Form } from "../../components/FormAvaliation/styles"

import { Props } from "../../components/FormAvaliation"
import { GenerateQuestions } from "../../components/GenerateQuestions"

export function CreateQuestions({typeAvaliation} : Props) {
  const [addQuestion, setAddQuestion] = useState(false)
  const [selectTypeQuestion, setSelectTypeQuestion] = useState('none')
  const [description, setDescription] = useState('')
  const [points, setPoints] = useState(0)

  const list = [
    {id: 'none',       type: 'Selecione uma opção'},
    {id: 'trueFalse',  type: 'Verdadeira ou Falsa '},
    {id: 'subjective', type: 'Subjetiva'},
    {id: 'objective',  type: 'Objetiva'}
  ]

  function handleNewQuestion() {
    setAddQuestion(true)
  }
  console.log(description)
  return (
    <div>
      <h3>Criando questões da {typeAvaliation === 'exam' ? 'prova' : 'Atividade'}</h3>
      <button onClick={handleNewQuestion}>
        Adicionar questão
      </button>
      { 
        addQuestion ? 
          <Form>
            <label htmlFor="typeQuestion">Qual tipo da questão: </label>
            <select 
              name="typeQuestion" id="typeQuestion"
              value={selectTypeQuestion}
              onChange={ e => setSelectTypeQuestion( e.target.value ) }
            >
              {list.map( (option, i) => (
                <option key={i} value={option.id}>{option.type}</option>
              ))}
            </select>
            <br />

            <label htmlFor="description">Qual enunciado da questão: </label>
            <br />
            <textarea 
              name="postContent" 
              rows={4} 
              cols={40} 
              value={description} 
              onChange={ e => setDescription( e.target.value ) }
            />

            <br />
            <label htmlFor="points">Pontuação da questão: </label>
            <input 
              value={points}
              onChange={ e => setPoints( e.target.valueAsNumber ) } 
              type="number" 
            />
            <GenerateQuestions 
              description={description} 
              typeQuestion={selectTypeQuestion}
              points={points} 
            />
          </Form> 
          : 
          <p>Nehuma questão foi criada</p>
      }
    </div>
  )
}
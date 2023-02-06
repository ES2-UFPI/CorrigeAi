import { useState, useContext } from "react"

import { Props } from "../../components/FormAvaliation"
import { GenerateQuestions } from "../../components/GenerateQuestions";
import { ContextQuestions } from "../../context/contextQuestions";

export function CreateQuestions({typeAvaliation} : Props) {
  //Variaveis para lidar com gerador de questões
  const [selectTypeQuestion, setSelectTypeQuestion] = useState('none')
  const [description, setDescription] = useState('')
  const [points, setPoints] = useState(0)

  // const [questions, setQuestions] = useState([{}])
  // Usando contexto global
  const {questions, handleNewQuestion, contQuestions} = useContext(ContextQuestions)

  return (
    <div>
      <h3>Criando questões da {typeAvaliation === 'exam' ? 'prova' : 'Atividade'}</h3>
      <button onClick={handleNewQuestion}>
        Adicionar questão
      </button>
      { 
        contQuestions > 0 ? 
          // Renderizando elementos do array dentro do component de quetões
          <GenerateQuestions 
            numberQuestion={contQuestions} 
            description={description}
            setDescription={setDescription}
            setPoints={setPoints}
            typeQuestion={selectTypeQuestion}
            setTypeQuestion={setSelectTypeQuestion}
          />
          : 
          <p>Nehuma questão foi criada</p>
      }
    </div>
  )
}
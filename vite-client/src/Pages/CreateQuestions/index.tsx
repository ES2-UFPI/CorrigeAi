import { useState } from "react"

// import { uuid } from "uuidv4";

import { Props } from "../../components/FormAvaliation"
import { GenerateQuestions } from "../../components/GenerateQuestions";

export function CreateQuestions({typeAvaliation} : Props) {
  //Variaveis para lidar com gerador de questões
  const [selectTypeQuestion, setSelectTypeQuestion] = useState('none')
  const [description, setDescription] = useState('')
  const [points, setPoints] = useState(0)

  // Armazena alternativas das questões 'trueFalse'
  const [contQuestions, setContQuestions] = useState(0)
  const [questions, setQuestions] = useState([{}])

  function handleNewQuestion() {
    //Adicionando nova questão
    if (contQuestions > 0 ){
      setContQuestions(contQuestions + 1); 
      setQuestions(current => [...current, {
        numberQuestion: contQuestions + 1,
        typeQuestion: '',
        description: '',
        points: 0
      }]);
    } else {
      //Substitue o primeiro elemento, pois o state precisa ser inicializado
      setContQuestions(contQuestions + 1); 
      setQuestions([{
        numberQuestion: contQuestions + 1,
        typeQuestion: '',
        description: '',
        points: 0
      }])
    }
  }

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
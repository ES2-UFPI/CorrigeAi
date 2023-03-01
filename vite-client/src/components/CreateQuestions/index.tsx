import { useState, useContext } from "react"

import { PropsForm } from "../FormAvaliation"
import { GenerateQuestions } from "../GenerateQuestions";
import { ContextQuestions } from "../../context/contextQuestions";

export function CreateQuestions({typeAvaliation} : PropsForm) {
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
          questions.map((question, index) => {
            return (
              <GenerateQuestions 
                key={index}
                id={index}
                description={question?.description}
                numberQuestion={question?.numberQuestion}
                typeQuestion={question.typeQuestion}
                points={question?.points}
                setDescription={question?.setDescription}
                setPoints={question?.setPoints}
                setTypeQuestion={question?.setTypeQuestion}
              />
            )
          })
          : 
          <p>Nehuma questão foi criada</p>
      }
    </div>
  )
}
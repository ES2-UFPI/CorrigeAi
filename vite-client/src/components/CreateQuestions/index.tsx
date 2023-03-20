import { useState, useContext } from "react"

import { PropsForm } from "../FormAvaliation"
import { GenerateQuestions } from "../GenerateQuestions";
import { ContextQuestions } from "../../context/contextQuestions";
import { ButtonAddQuestion } from "./styles";
import { SubForm } from "../FormAvaliation/styles";

export function CreateQuestions({typeAvaliation} : PropsForm) {
  // Usando contexto global
  const {questions, handleNewQuestion, contQuestions} = useContext(ContextQuestions)
  return (
    <SubForm className="subForm">
      <h3>Criando questões da {typeAvaliation === 'exam' ? 'prova' : 'Atividade'}</h3>
      <ButtonAddQuestion onClick={handleNewQuestion}>
        Adicionar questão
      </ButtonAddQuestion>
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
    </SubForm>
  )
}
import { useEffect, useState } from 'react'
import React from 'react'
import {
  AlternativeQuestion,
  PropsAlternative
} from '../../components/AlternativeQuestion'
// import { AlternativeQuestion } from "../../components/AlternativeQuestion"
import { Avaliation, QuestionStyle } from './styles'
import { PropsForm } from '../../components/FormAvaliation'
import { Wrapper } from '../../styles/Layout'

export function SolveAvaliation() {
  const [formAvaliation, setFormAvaliation] = useState<PropsForm>(
    {} as PropsForm
  )
  const [isClick, setIsClick] = useState(false)

  const forceUpdate: () => void = useState({})[1].bind(null, {})

  useEffect(() => {
    fetch('./avaliation.json', {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        setFormAvaliation(res)
        // console.log(formAvaliation)
      })
  }, [])

  function handleExpectedAnswer(
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) {
    const newQuestion = formAvaliation.questions
    if (newQuestion) {
      newQuestion[index].answer = e.target.value
    }
  }

  function handleExpectedAnswerAlternative(
    alternative: PropsAlternative,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    if (alternative.answerAlternative) {
      alternative.answerAlternative = false
    } else {
      alternative.answerAlternative = true
    }
    setFormAvaliation(formAvaliation) //Talvez não esteja sincrono
  }

  function handleExpectedAnswerTrueFalse(
    alternative: PropsAlternative,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    if (alternative.answerAlternative) {
      alternative.answerAlternative = false
    } else {
      alternative.answerAlternative = true
    }
    setFormAvaliation(formAvaliation)
    forceUpdate()
  }

  return (
    <Avaliation>
      <Wrapper>
        {/* <h1>{ formAvaliation.typeAvaliation }</h1>  */}
        <h2>Tema: {formAvaliation.themeAvaliation}</h2>
        <p>
          Data de inicio - {formAvaliation.initialAvaliation} até{' '}
          {formAvaliation.finalAvaliation}
        </p>
        <p>Tempo: {formAvaliation.time}</p>
        <strong>Vale {formAvaliation.points} pontos</strong>
        <h3>Questões: </h3>

        {formAvaliation.questions?.map((question, index) => {
          if (question.typeQuestion === 'subjective') {
            return (
              <QuestionStyle key={index} className="question">
                <h4>
                  {question.numberQuestion + ' - ' + question.description}
                </h4>
                <label htmlFor="description">Resposta:</label>
                <br />
                <textarea
                  name="postContent"
                  rows={4}
                  cols={40}
                  value={question.answer}
                  onChange={e => handleExpectedAnswer(e, index)}
                />
                <br />
                <br />
              </QuestionStyle>
            )
          } else if (question.typeQuestion === 'objective') {
            return (
              <QuestionStyle>
                <h4>
                  {question.numberQuestion + ' - ' + question.description}
                </h4>
                {question.alternatives?.map((alternative, index) => {
                  return (
                    <div key={index + 1}>
                      <input
                        type="checkbox"
                        onChange={e =>
                          handleExpectedAnswerAlternative(alternative, e)
                        }
                      />
                      <p>{alternative.alternativeData}</p>
                    </div>
                  )
                })}
                <br />
              </QuestionStyle>
            )
          } else {
            return (
              <QuestionStyle key={index} className="question">
                <div>
                  <h4>
                    {question.numberQuestion + ' - ' + question.description}
                  </h4>
                  {question.alternatives?.map((alternative, index) => {
                    return (
                      <div key={index + 1}>
                        <strong>
                          {'>' + alternative.alternativeData + '-'}
                        </strong>
                        <label htmlFor="true">Verdadeiro</label>
                        <input
                          type="checkbox"
                          checked={alternative.answerAlternative}
                          onChange={e =>
                            handleExpectedAnswerTrueFalse(alternative, e)
                          }
                        />
                        <label htmlFor="false">falso</label>
                        <input
                          type="checkbox"
                          checked={!alternative.answerAlternative}
                          onChange={e =>
                            handleExpectedAnswerTrueFalse(alternative, e)
                          }
                        />
                      </div>
                    )
                  })}
                  <br />
                </div>
              </QuestionStyle>
            )
          }
        })}
      </Wrapper>
    </Avaliation>
  )
}

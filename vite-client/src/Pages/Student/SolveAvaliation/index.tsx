import { useEffect, useState } from 'react'
import React from 'react'

import {
  AlternativeQuestion,
  PropsAlternative
} from '../../../components/AlternativeQuestion'

import {
  AlternativesObjective,
  AlternativesTrueFalse,
  Avaliation,
  Container,
  ContentQuestion,
  QuestionStyle
} from './styles'

import { PropsForm } from '../../../components/FormAvaliation'
import { Wrapper } from '../../../styles/Layout'
import { useLocation } from 'react-router-dom'
import { Layout } from '../../../components/Layout'

export function SolveAvaliation() {
  const [formAvaliation, setFormAvaliation] = useState<PropsForm>(
    {} as PropsForm
  )
  // const [isClick, setIsClick] = useState(false)
  const { state } = useLocation()

  const forceUpdate: () => void = useState({})[1].bind(null, {})

  const usedIds: number[] = []

  function generateUniqueId(): number {
    let newId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
    while (usedIds.includes(newId)) {
      newId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
    }
    usedIds.push(newId)
    return newId
  }

  useEffect(() => {
    setFormAvaliation(state)
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

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()

  function getAlphabetLetter(index: number): string {
    const letterIndex = index % 26 // pega o índice da letra no alfabeto
    return alphabet.charAt(letterIndex)
  }

  return (
    <Layout>
      <Avaliation>
        <Wrapper className="Wrapper">
          <Container className="Container">
            <div className="aboutAvaliation">
              <h2>Tema: {formAvaliation.themeAvaliation}</h2>
              <p>
                Data de inicio - {formAvaliation.initialAvaliation} até{' '}
                {formAvaliation.finalAvaliation}
              </p>
              <p>Tempo: {formAvaliation.time}</p>
              <strong>Vale {formAvaliation.points} pontos</strong>
            </div>

            <h3>Questões: </h3>
            <div className="questions">
              {formAvaliation.questions?.map((question, index) => {
                if (question.typeQuestion === 'subjective') {
                  return (
                    <QuestionStyle
                      key={generateUniqueId()}
                      className="subjective"
                    >
                      <h4>
                        {question.numberQuestion + ' - ' + question.description}
                      </h4>
                      <ContentQuestion>
                        <label htmlFor="description">Resposta:</label>
                        <textarea
                          name="postContent"
                          rows={4}
                          cols={40}
                          value={question.answer}
                          onChange={e => handleExpectedAnswer(e, index)}
                        />
                      </ContentQuestion>
                    </QuestionStyle>
                  )
                } else if (question.typeQuestion === 'objective') {
                  return (
                    <QuestionStyle
                      key={generateUniqueId()}
                      className="objective"
                    >
                      <h4>
                        {question.numberQuestion + ' - ' + question.description}
                      </h4>
                      <ContentQuestion>
                        <AlternativesObjective>
                          {question.alternatives?.map((alternative, index) => {
                            return (
                              <div key={generateUniqueId()}>
                                <input
                                  type="checkbox"
                                  onChange={e =>
                                    handleExpectedAnswerAlternative(
                                      alternative,
                                      e
                                    )
                                  }
                                />
                                <p>{alternative.alternativeData}</p>
                              </div>
                            )
                          })}
                        </AlternativesObjective>
                      </ContentQuestion>
                    </QuestionStyle>
                  )
                } else {
                  return (
                    <QuestionStyle
                      key={generateUniqueId()}
                      className="trueFalse"
                    >
                      <h4>
                        {question.numberQuestion + ' - ' + question.description}
                      </h4>
                      <ContentQuestion>
                        <AlternativesTrueFalse>
                          {question.alternatives?.map((alternative, index) => {
                            return (
                              <div key={generateUniqueId()}>
                                <p>
                                  {getAlphabetLetter(index) +
                                    ' - ' +
                                    alternative.alternativeData}
                                </p>
                                <div>
                                  <input
                                    type="checkbox"
                                    checked={alternative.answerAlternative}
                                    onChange={e =>
                                      handleExpectedAnswerTrueFalse(
                                        alternative,
                                        e
                                      )
                                    }
                                  />
                                  <label htmlFor="true">
                                    <strong>Verdadeiro</strong>
                                  </label>
                                  <input
                                    type="checkbox"
                                    checked={!alternative.answerAlternative}
                                    onChange={e =>
                                      handleExpectedAnswerTrueFalse(
                                        alternative,
                                        e
                                      )
                                    }
                                  />
                                  <label htmlFor="false">
                                    <strong>Falso</strong>
                                  </label>
                                </div>
                              </div>
                            )
                          })}
                        </AlternativesTrueFalse>
                      </ContentQuestion>
                    </QuestionStyle>
                  )
                }
              })}
            </div>
          </Container>
        </Wrapper>
      </Avaliation>
    </Layout>
  )
}

import { useContext, useState } from "react"

import { Alternative, ButtonAddAlternative, ButtonDeleteQuestion, GenerateQuestionStyled, TypeQuestion } from "./styles"

import { ContextQuestions } from "../../context/contextQuestions"
import { PropsAlternative } from "../AlternativeQuestion"
import { AddIcon } from "../AddIcon"
// import { AlternativeQuestion } from "../AlternativeQuestion"

export interface PropsQuestions {
  id: number //id para referenciar alternativa
  numberQuestion: number
  typeQuestion: string;
  description: string;
  expectedAnswerSubjective?: string
  answer?: string;
  points?: number;
  alternatives?: PropsAlternative []
  setTypeQuestion?: React.Dispatch<React.SetStateAction<string>>;
  setDescription?: React.Dispatch<React.SetStateAction<string>>; 
  setPoints?: React.Dispatch<React.SetStateAction<number>>;
}

export function GenerateQuestions({ typeQuestion, description, points, ...props } : PropsQuestions) {
  const list = [
    {id: 'none',       type: 'Selecione uma opção'},
    {id: 'trueFalse',  type: 'Verdadeira ou Falsa '},
    {id: 'subjective', type: 'Subjetiva'},
    {id: 'objective',  type: 'Objetiva'}
  ]
  
  // usando contexto global para questões
  const { questions, setQuestions, contQuestions, setContQuestions } = useContext(ContextQuestions)
  const [isCorrect, setIsCorrect]  = useState(false)

  // const { alternativeData } = useContext(alternativeContext)
  // console.log(questions)

  const forceUpdate: () => void = useState({})[1].bind(null, {}) // gambiarra para re-renderizar pagina

  function handleOnChangeTypeQuestion(
    e : React.ChangeEvent<HTMLSelectElement>){
      //Manipulando individualmente cada input selection
      questions[props.id].typeQuestion = e.target.value
      setQuestions([...questions])
  }

  function handleOnChangeDescription(
    e : React.ChangeEvent<HTMLTextAreaElement>){
      //Manipulando individualmente cada input textarea
      questions[props.id].description = e.target.value
      setQuestions([...questions])
  }

  function handleOnChangeAnswer(
    e : React.ChangeEvent<HTMLTextAreaElement>){
      const newQuestions = questions[props.id]
      if (newQuestions.expectedAnswerSubjective === undefined || null) { 
        newQuestions.expectedAnswerSubjective = ''
      }else {
        newQuestions.expectedAnswerSubjective = e.target.value
      }
  }

  function handleOnChangePoints(
    e : React.ChangeEvent<HTMLInputElement>){
    //Manipulando individualmente cada input number
    questions[props.id].points = Number(e.target.value)
    setQuestions([...questions])
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newAlternatives = questions[props.id].alternatives
    if (newAlternatives){
      //Modifica cada input de maneira especifica
      newAlternatives[index].alternativeData = event.target.value
    }
    setQuestions([...questions])
  }

  function handleRemoveAlternative(index: number){
    const newAlternatives = questions[props.id].alternatives
    if (newAlternatives) {
      newAlternatives.splice(index, 1);
    }
    setQuestions([...questions])
  }

  async function handleAddAlternative(e : React.InputHTMLAttributes<HTMLInputElement>){
    // Criar elemento alternative dentro de question
    const newQuestions = questions
    if (newQuestions[props.id].alternatives){
      // Quando array alternatives existe
      newQuestions[props.id].alternatives?.push(
        { alternativeData: '', isCorrect: isCorrect, answerAlternative: false }
      )
    }else {
      // Primeira insersão no array, alternatives ainda não existe
      newQuestions[props.id].alternatives = [
        { alternativeData: '', isCorrect: isCorrect, answerAlternative: false }] //?
    }
    await setQuestions(newQuestions)
    forceUpdate() 
  }

  function handleIsCorrect(index: number){
    const newQuestions = questions[props.id].alternatives
    if (newQuestions){
      if (newQuestions[index].isCorrect === false){
        newQuestions[index].isCorrect = true
      }else {
        newQuestions[index].isCorrect = false
      }
    }
    setQuestions([...questions])
  }

  function handleDeleteQuestion(){
    const newQuestions = questions.slice()
    newQuestions.splice(props.id, 1)
    setQuestions(newQuestions)
  }

  return (
    <GenerateQuestionStyled className="question">
      <div>
        <TypeQuestion>
          <label htmlFor="typeQuestion">Qual tipo da questão: </label>
          <select
            name="typeQuestion"
            id="typeQuestion"
            value={typeQuestion}
            onChange={ e => handleOnChangeTypeQuestion(e) }
          >
            {list.map((option, i) => (
              <option key={i} value={option.id}>
                {option.type}
              </option>
            ))}
          </select>
        </TypeQuestion>
        <label htmlFor="description">Qual enunciado da questão: </label>
        <textarea
          name="postContent"
          rows={4}
          cols={40}
          value={description}
          onChange={ e => handleOnChangeDescription(e) }
        />

        {typeQuestion === 'trueFalse' ? ( //Questões verdadeira ou falsa
          <div>
            <legend>
              <h4>Questão verdadeira ou falsa</h4>
            </legend>
            <ButtonAddAlternative >
              <AddIcon />
            </ButtonAddAlternative>
            { 
              // Renderizar alternativas para cada questão
              questions[props.id].alternatives ?
                questions[props.id].alternatives?.map((alternative, index) => {
                  return (
                    <Alternative key={index}>
                      <label htmlFor="alternative">Enunciado da alternativa: </label>
                      <input 
                        type="text" 
                        id="alternative"
                        value={alternative.alternativeData}  
                        onChange={ event => handleInputChange(event, index)}
                      />

                      <div className="trueFalse">
                        <input
                          type="checkbox"
                          checked={alternative.isCorrect}
                          onClick={ () => handleIsCorrect(index) }
                        />
                        <label htmlFor="choiceAlternative">Verdadeira</label>

                        <input
                          type="checkbox"
                          checked={!alternative.isCorrect}
                          defaultChecked
                          onClick={ () => handleIsCorrect(index) }
                        />
                        <label htmlFor="choiceAlternative">Falsa</label>

                        <button 
                          type="button"
                          onClick={ () => handleRemoveAlternative(index) }>
                          Deletar alternativa
                        </button>
                      </div>
                    </Alternative>
                  )
                })
                : 
                <p>Não tem alternativa</p>
            }    
          </div>
        ) : typeQuestion === 'objective' ? ( //Questões objetivas
          <div>
            <legend>
              <h4>Questão objetiva</h4>
            </legend>
            <ButtonAddAlternative
              type="button"
              onClick={ e => handleAddAlternative(e) }>
              <AddIcon />
            </ButtonAddAlternative>
            { 
              // Renderizar alternativas para cada questão
              questions[props.id].alternatives ?
                questions[props.id].alternatives?.map((alternative, index) => {
                  return (
                    <Alternative key={index}>
                      <label htmlFor="alternative">Enunciado da alternativa: </label>
                      <input
                        type="text"
                        id="alternative"
                        value={alternative.alternativeData}
                        onChange={ event => handleInputChange(event, index)}
                      />

                      <div className="objective">
                        <div>
                          <label htmlFor="alternative">Opção correta ?</label>
                          <input
                            type="checkbox"
                            onClick={ () => handleIsCorrect(index) }
                          />
                        </div>
                        <button
                          type="button"
                          onClick={ () => handleRemoveAlternative(index) }>
                          Deletar alternativa
                        </button>
                      </div>
                    </Alternative>
                  )
                })
                : 
                <p>Não tem alternativa</p>
            } 
          </div>
        ) : typeQuestion === 'subjective' ? ( //Questões subjetivas
          <div>
            <legend>
              <h4>Questão subjetiva</h4>
            </legend>
            <label htmlFor="response">Resposta esperada da questão </label>
            <textarea
              name="postContent"
              rows={4}
              cols={40}
              value={props.expectedAnswerSubjective}
              onChange={ e => handleOnChangeAnswer(e) }
            />
          </div>
        ) : null}
        <hr />
        <label htmlFor="points">Pontuação da questão: </label>
        <input
          value={points}
          onChange={e => handleOnChangePoints(e)}
          type="number"
        />
        <ButtonDeleteQuestion
          onClick={handleDeleteQuestion}>
          Excluir
        </ButtonDeleteQuestion>
      </div>
    </GenerateQuestionStyled>
  )
}

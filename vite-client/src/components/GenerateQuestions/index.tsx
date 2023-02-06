import { useContext } from "react"

import { Form } from "../../components/FormAvaliation/styles"
import { GenerateQuestionStyled } from "./styles"

import { ContextQuestions } from "../../context/contextQuestions"

export interface PropsQuestions {
  id: number
  numberQuestion: number
  typeQuestion: string;
  description: string;
  points?: number;
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

  const { questions, setQuestions } = useContext(ContextQuestions)

  function handleOnChangeTypeQuestion(
    e : React.ChangeEvent<HTMLSelectElement>, id: number){
      //Manipulando individualmente cada input selection
      questions[id].typeQuestion = e.target.value
      setQuestions([...questions])
  }

  function handleOnChangeDescription(
    e : React.ChangeEvent<HTMLTextAreaElement>, id: number){
      //Manipulando individualmente cada input textarea
      questions[id].description = e.target.value
      setQuestions([...questions])
  }

  function handleOnChangePoints(
    e : React.ChangeEvent<HTMLInputElement> , id: number ){
    //Manipulando individualmente cada input number
    questions[id].points = Number(e.target.value)
    setQuestions([...questions])
  }

  return (
    <GenerateQuestionStyled>
      <form>
        <label htmlFor="typeQuestion">Qual tipo da questão: </label>
        <select
          name="typeQuestion"
          id="typeQuestion"
          value={typeQuestion}
          onChange={ e => handleOnChangeTypeQuestion(e, props.id) } //?.
        >
          {list.map((option, i) => (
            <option key={i} value={option.id}>
              {option.type}
            </option>
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
          onChange={ e => handleOnChangeDescription(e , props.id) }
        />

        {typeQuestion === 'trueFalse' ? (
          <div>
            <legend>
              <h3>Questão verdadeira ou falsa</h3>
            </legend>
            <button type="button">
              +
            </button>
            {
              // moreAlternative && setAlternativesQuestion( <AlternativeQuestions /> )
              //Vai renderizar o component para cada objeto dentro do array
            }
          </div>
        ) : typeQuestion === 'objective' ? (
          <div>
            <legend>
              <h3>Questão objetiva</h3>
            </legend>
          </div>
        ) : typeQuestion === 'subjective' ? (
          <div>
            <legend>
              <h3>Questão subjetiva</h3>
            </legend>
          </div>
        ) : null}
        <br />
        <label htmlFor="points">Pontuação da questão: </label>
        <input
          value={points}
          onChange={e => handleOnChangePoints(e, props.id)}
          type="number"
        />
        <br />
      </form>
    </GenerateQuestionStyled>
  )
}

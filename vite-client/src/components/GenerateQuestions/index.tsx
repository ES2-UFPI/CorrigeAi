import { Form } from "../../components/FormAvaliation/styles"
import { GenerateQuestionStyled } from "./styles"

// import { AlternativeQuestion } from "../../components/AlternativeQuestion"

export interface PropsQuestions {
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

  return (
    <GenerateQuestionStyled>
      <form>
        <label htmlFor="typeQuestion">Qual tipo da questão: </label>
        <select
          name="typeQuestion"
          id="typeQuestion"
          value={typeQuestion}
          onChange={e => props.setTypeQuestion?.(e.target.value)} //?.
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
          onChange={e => props.setDescription?.(e.target.value)}
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
          onChange={e => props.setPoints?.(e.target.valueAsNumber)}
          type="number"
        />
        <br />
      </form>
    </GenerateQuestionStyled>
  )
}

import { useContext, useState } from "react"

import { GenerateQuestionStyled } from "./styles"

import { ContextQuestions } from "../../context/contextQuestions"
import { ContextAlternatives } from "../../context/contextAlternatives"
import { PropsAlternative } from "../AlternativeQuestion"
import { AlternativeQuestion } from "../AlternativeQuestion"

export interface PropsQuestions {
  id: number //id para referenciar alternativa
  numberQuestion: number
  typeQuestion: string;
  description: string;
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
  const { questions, setQuestions } = useContext(ContextQuestions)
  const { allAlternatives, setAllAlternatives } = useContext(ContextAlternatives)
  // const { alternativeData } = useContext(alternativeContext)
  console.log(questions)

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

  async function handleAddAlternative(e : React.InputHTMLAttributes<HTMLInputElement>){
    // Criar elemento alternative dentro de question
    const newQuestions = questions
    if (newQuestions[props.id].alternatives){
      // Quando array alternatives existe
      newQuestions[props.id].alternatives?.push(
        { alternativeData: '', }
      )
    }else {
      // Primeira insersão no array, alternatives ainda não existe
      newQuestions[props.id].alternatives = [
        { alternativeData: '',
      }] //?
    }
    await setQuestions(newQuestions)
    forceUpdate() 
  }

  return (
    <GenerateQuestionStyled>
      <form>
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
        <br />
        <label htmlFor="description">Qual enunciado da questão: </label>
        <br />
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
              <h3>Questão verdadeira ou falsa</h3>
            </legend>
            <button 
              type="button"
              onClick={ e => handleAddAlternative(e) }>
              +
            </button>
            { 
              // Renderizar alternativas para cada questão
              questions[props.id].alternatives ?
                questions[props.id].alternatives?.map((alternative, index) => {
                  return (
                    <div>
                      <label htmlFor="alternative">Enunciado da alternativa: </label>
                      <input 
                        type="text" 
                        id="alternative"
                        value={alternative.alternativeData}  
                        onChange={ event => handleInputChange(event, index)}
                      />
                  </div>
                  )
                })
                // allAlternatives.map((alternative) => {
                //   return (
                //     <AlternativeQuestion 
                //       keyAlternative={props.id}
                //       alternativeData={alternative.alternativeData}
                //     />
                //   )
                // })
                : 
                <p>Não tem alternativa</p>
            } 
          </div>
        ) : typeQuestion === 'objective' ? ( //Questões objetivas
          <div>
            <legend>
              <h3>Questão objetiva</h3>
            </legend>
          </div>
        ) : typeQuestion === 'subjective' ? ( //Questões subjetivas
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
          onChange={e => handleOnChangePoints(e)}
          type="number"
        />
        <br />
      </form>
    </GenerateQuestionStyled>
  )
}

// import { PropsForm } from "../FormAvaliation"
// import { PropsQuestions } from "../GenerateQuestions"

export interface PropsAlternative {
  alternativeData?: string
  isCorrect: boolean
  answerAlternative?: boolean
}

export function AlternativeQuestion(props : PropsAlternative){
  return (
    <div>
      <h1>teste</h1>
    </div>
  )
}
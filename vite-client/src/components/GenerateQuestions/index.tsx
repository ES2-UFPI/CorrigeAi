interface PropsQuestions {
  description: string
  typeQuestion: string //true or False, objective, subjective
  points: number //Pontuação da questão
}

export function GenerateQuestions ( {typeQuestion, points} : PropsQuestions ) {
  return (
    <div>

    </div>
  )
}
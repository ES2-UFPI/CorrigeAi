import { useEffect, useState } from "react"

import { PropsForm } from "../../components/FormAvaliation"

export function SolveAvaliation(){
  const [exam, setExam] = useState<PropsForm>( {} as PropsForm )

  useEffect(() => {
    fetch('./exam.json', {
      headers: {
        Accept: "application/json"
      }
    }).then(res => res.json())
      .then(res => setExam(res))
  },[])

  return (
    <div>
      <h1>Resolvendo avaliação</h1>
    </div>
  )
}
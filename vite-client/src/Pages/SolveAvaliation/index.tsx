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
      .then(res => {
        setExam(res)
        console.log(exam)
      })
  },[])

  return (
    <div>
      <h1>Tema: {exam.themeAvaliation}</h1>
      
    </div>
  )
}
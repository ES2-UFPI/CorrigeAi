import { useContext } from "react"
import { alternativeContext } from "../../context/contextAlternatives"

export interface PropsAlternative {
  alternativeData: string 
}

export function AlternativeQuestion() {
  const { alternativeData, setAlternative } = useContext(alternativeContext)
 
  return (
    <div>
      <label htmlFor="alternative">Enunciado da alternativa: </label>
      <input 
        type="text" 
        id="alternative"
        value={alternativeData}  
        onChange={ e => setAlternative(e.target.value) }
      />
    </div>
  )
}
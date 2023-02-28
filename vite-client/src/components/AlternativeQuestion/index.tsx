import { useContext } from "react"
import { alternativeContext } from "../../context/contextAlternatives"

export interface PropsAlternative {
  alternativeData: string
  keyAlternative: Number
}

export function AlternativeQuestion() {
  // const { alternativeData, setAlternative } = useContext(alternativeContext)
 
  return (
    <div>
      <label htmlFor="alternative">Enunciado da alternativa: </label>
      <input 
        type="text" 
        id="alternative"
        // value={}  
        // onChange={ }
      />
    </div>
  )
}
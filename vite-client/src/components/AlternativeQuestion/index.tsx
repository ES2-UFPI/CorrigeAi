import { useContext } from "react"
import { ContextAlternatives } from "../../context/contextAlternatives"

export interface PropsAlternative {
  alternativeData?: string
  keyAlternative?: Number
}

export function AlternativeQuestion({ alternativeData } : PropsAlternative) {
  // const { alternativeData, setAlternative } = useContext(alternativeContext)
 
  return (
    <div>
      <label htmlFor="alternative">Enunciado da alternativa: </label>
      <input 
        type="text" 
        id="alternative"
        value={alternativeData}  
        // onChange={ }
      />
    </div>
  )
}
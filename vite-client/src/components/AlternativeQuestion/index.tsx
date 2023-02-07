import { useState } from 'react'

export interface PropsAlternative {
  alternativeData: string 
}

export function AlternativeQuestion({alternativeData} : PropsAlternative) {
  // const [alternativeData, setAlternativeData] = useState('')

  function handleAlternative(e : React.ChangeEvent<HTMLInputElement>){
    // setAlternativeData(e.target.value)
  }

  return (
    <div>
      <label htmlFor="alternative">Enunciado da alternativa: </label>
      <input 
        type="text" 
        id="alternative"
        value={alternativeData} 
        onChange={e => handleAlternative( e )}
      />
    </div>
  )
}
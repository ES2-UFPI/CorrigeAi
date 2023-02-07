import { useState } from 'react'

export interface PropsAlternative {
  alternativeData: string 
}

export function AlternativeQuestion({alternativeData} : PropsAlternative) {
  function handleAlternativeChange(){

  }

  return (
    <div>
      <label htmlFor="alternative">Enunciado da alternativa: </label>
      <input 
        type="text" 
        id="alternative"
        value={alternativeData}  
        onChange={handleAlternativeChange}
      />
    </div>
  )
}
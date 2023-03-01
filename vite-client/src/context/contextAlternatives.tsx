//Logica não utilizada
import { createContext, useState } from 'react'
import { PropsAlternative } from '../components/AlternativeQuestion'

interface IPropsAlternative {
  allAlternatives: PropsAlternative [],
  setAllAlternatives: React.Dispatch<React.SetStateAction<PropsAlternative[]>>
}

interface Props {
  children: React.ReactNode
}

export const ContextAlternatives = createContext({} as IPropsAlternative )

export const AlternativeProvider : React.FC<Props> = ({children}) => {
  const [allAlternatives, setAllAlternatives] = useState<PropsAlternative[]>([])

  return (
    <ContextAlternatives.Provider
      value={{
        allAlternatives,
        setAllAlternatives
      }}  
    >
      {children}
    </ContextAlternatives.Provider>
  )
}
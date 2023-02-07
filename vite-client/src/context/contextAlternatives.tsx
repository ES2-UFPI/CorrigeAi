import { createContext, useState } from 'react'

interface IPropsAlternative {
  alternativeData: string
  setAlternative: React.Dispatch<React.SetStateAction<string>>
}

interface Props {
  children: React.ReactNode
}

export const alternativeContext = createContext({} as IPropsAlternative )

export const AlternativeProvider : React.FC<Props> = ({children}) => {
  const [alternative, setAlternative] = useState('')

  return (
    <alternativeContext.Provider
      value={{
        alternativeData: alternative,
        setAlternative: setAlternative,
      }}  
    >
      {children}
    </alternativeContext.Provider>
  )
}
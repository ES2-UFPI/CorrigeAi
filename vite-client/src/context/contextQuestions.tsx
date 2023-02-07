import { createContext, useState } from "react";
import { PropsQuestions } from "../components/GenerateQuestions";

import { AlternativeProvider } from "./contextAlternatives";

interface IContextQuestionsProps {
  questions: PropsQuestions[]  
  setQuestions: React.Dispatch<React.SetStateAction<PropsQuestions[]>>
  contQuestions: number
  handleNewQuestion: () => void
}

interface Props {
  children: React.ReactNode
}

export const ContextQuestions = createContext({} as IContextQuestionsProps)

export const ContextQuestionsProvider : React.FC<Props> = ({children}) => {
  const [contQuestions, setContQuestions] = useState(0)
  const [questions, setQuestions] = useState<PropsQuestions[]>([])

  function handleNewQuestion() {
    setContQuestions(contQuestions + 1); 
    setQuestions(current => [...current, {
      id: contQuestions,
      numberQuestion: contQuestions + 1,
      typeQuestion: '',
      description: '',
      points: 0,
    }]);
  }

  return (
    <ContextQuestions.Provider value={{
      questions: questions,
      contQuestions: contQuestions,
      setQuestions: setQuestions,
      handleNewQuestion: handleNewQuestion
    }}>
      <AlternativeProvider>
        {children}
      </AlternativeProvider>
    </ContextQuestions.Provider>
  )
}
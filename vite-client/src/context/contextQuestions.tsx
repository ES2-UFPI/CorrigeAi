import { createContext, useState } from "react";
import { PropsQuestions } from "../components/GenerateQuestions";

interface IContextQuestionsProps {
  questions: PropsQuestions[]  
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
      numberQuestion: contQuestions + 1,
      typeQuestion: '',
      description: '',
      points: 0
    }]);
  }

  return (
    <ContextQuestions.Provider value={{
      questions: questions,
      contQuestions: contQuestions,
      handleNewQuestion: handleNewQuestion
    }}>
      {children}
    </ContextQuestions.Provider>
  )
}
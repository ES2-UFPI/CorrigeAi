import { createContext, useState } from "react";
import { PropsQuestions } from "../components/GenerateQuestions";

interface IContextQuestionsProps {
  questions: PropsQuestions[]  
  setQuestions: React.Dispatch<React.SetStateAction<PropsQuestions[]>>
  contQuestions: number
  setContQuestions: React.Dispatch<React.SetStateAction<number>>
  handleNewQuestion: () => void
}

interface Props {
  children: React.ReactNode
}

export const ContextQuestions = createContext({} as IContextQuestionsProps)

export const ContextQuestionsProvider : React.FC<Props> = ({children}) => {
  const usedIds: number[] = [];

  function generateUniqueId(): number {
    let newId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    while (usedIds.includes(newId)) {
      newId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    }
    usedIds.push(newId);
    return newId;
  }

  const [contQuestions, setContQuestions] = useState(0)
  const [questions, setQuestions] = useState<PropsQuestions[]>([])

  function handleNewQuestion() {
    setContQuestions(contQuestions + 1); 
    setQuestions(current => [...current, {
      id: generateUniqueId(),
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
      setContQuestions: setContQuestions,
      setQuestions: setQuestions,
      handleNewQuestion: handleNewQuestion
    }}>
      {children}
    </ContextQuestions.Provider>
  )
}
import React from "react";
import CreateQuestion from "../components/CreateQuestion";
import { useState } from "react";

interface iSubjetiva {
  enunciado: string;
  resposta: string;
}

interface iObjetiva {
  enunciado: string;
  alternativas: string[];
  resposta: string;
}

type Alternative = {
  text: string;
  isTrue: boolean;
};

interface iTrueOrFalse {
  statement: string;
  alternative: Alternative[];
}



interface iQuestions {
  type: string;
  saved: boolean;
  question: string;
}

const initialState: iQuestions[] = [
  {
    type: "subjetiva",
    saved: false,
    question: "subjetiva",
  },
];

function AddQuestions() {
  const [questions, setQuestion] = useState<iQuestions[]>(initialState);
  const [questoes, setQuestoes] = useState<iQuestao[]>([] as iQuestao[]);

  // This function is triggered when the select changes
  const selectChange = (index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const newQuestion = [...questions];
    newQuestion[index].type = event.target.value;
    setQuestion(newQuestion);
  };
  
  const handleCreateQuestion = () => {
    setQuestion([...questions, initialState[0]])
  };

  const handleDeleteOption = (index: number) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestion(newQuestions);
  };

  const teste = () => {
    console.log();
  };
  teste()

  const handleAddQuestion = () => {
  
    console.log('foi')
    //setQuestoes([...questoes, question]);
  };


  return (
  
    <form>
      {questions.map((question, index) => (
        <div key={index}>
          <label htmlFor="tipo">Tipo de questão</label>
          <select value={question.type} onChange={ (e) => selectChange(index, e)} id="tipo">
            <option value="subjetiva">Subjetiva</option>
            <option value="objetiva">Objetiva</option>
            <option value="verdadeiroOuFalso">Verdadeiro ou Falso</option> 
          </select>
          <CreateQuestion question={question} onSetState={handleAddQuestion} />
          { (((questions.length) > 1) && (question.saved == false)  )  && (
            <button type="button" onClick={() => handleDeleteOption(index)}>
              Delete
            </button>
          )}
        </div>     
      ))}
      <button type="button" onClick={handleCreateQuestion}>
        Adicionar Questao
      </button>
    </form>
  );
}

export default AddQuestions;

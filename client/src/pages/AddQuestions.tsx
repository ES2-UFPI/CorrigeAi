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

interface iQuestao {
  tipo: "subjetiva" | "objetiva";
  questao: iSubjetiva | iObjetiva;
}

function AddQuestions() {
  const [tipos, setTipo] = useState<string[]>(["subjetiva"]);
  const [questoes, setQuestoes] = useState<iQuestao[]>([] as iQuestao[]);

  // This function is triggered when the select changes
  const selectChange = (index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const newTipos = [...tipos];
    newTipos[index] = event.target.value;
    setTipo(newTipos);
  };
  
  const handleCreateQuestion = () => {
    setTipo([...tipos, "subjetiva"])
  };

  const handleDeleteOption = (index: number) => {
    const newTipos = [...tipos];
    newTipos.splice(index, 1);
    setTipo(newTipos);
  };

  const teste = () => {
    console.log(tipos);
  };
  teste()

  const handleAddQuestion = () => {
  
    console.log('foi')
    //setQuestoes([...questoes, question]);
  };


  return (
  
    <form>
      {tipos.map((tipo, index) => (
        <div key={index}>
          <label htmlFor="tipo">Tipo de questão</label>
          <select value={tipo} onChange={ (e) => selectChange(index, e)} id="tipo">
            <option value="subjetiva">Subjetiva</option>
            <option value="objetiva">Objetiva</option>
            <option value="verdadeiroOuFalso">Verdadeiro ou Falso</option> 
          </select>
          <CreateQuestion typeOfQuestion={tipo} onSetState={handleAddQuestion} />
          {(tipo.length) > 1 && (
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

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

  const [questoes, setQuestoes] = useState<iQuestao[]>([] as iQuestao[]);
  const [tipo, setTipo] = useState<string>("");


  // This function is triggered when the select changes
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const value = event.target.value;
    setTipo(value);
  };
  

  return (
    <div>
      <form>
        <label htmlFor="tipo">Tipo de questão</label>
        <select onChange={selectChange} id="tipo">
          <option value="subjetiva">Subjetiva</option>
          <option value="objetiva">Objetiva</option>
          <option value="verdadeiroOuFalso">Verdadeiro ou Falso</option> 
        </select>
      </form>
      <CreateQuestion typeOfQuestion={tipo} />
    </div>
  );
}

export default AddQuestions;

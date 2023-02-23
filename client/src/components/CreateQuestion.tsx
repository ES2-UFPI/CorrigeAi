import React, { MouseEventHandler } from "react";
import Objetiva from "./Objetiva";
import Subjetiva from "./Subjetiva";
import VerdadeiroOuFalso from "./VerdadeiroOuFalso";
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

interface Props {
  onSetState: MouseEventHandler<HTMLButtonElement>;
  typeOfQuestion:string
}

const CreateQuestion: React.FC<Props> = ( {typeOfQuestion, onSetState} ) => {
  
  const [questoes, setQuestoes] = useState<iQuestao[]>([] as iQuestao[]);


  return (
    <div>
      {(() => {
        switch (typeOfQuestion) {
          case "objetiva":
            return <Objetiva />;
          case "subjetiva":
            return <Subjetiva />;
          case "verdadeiroOuFalso":
            return <VerdadeiroOuFalso onSetState={onSetState}/>;
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default CreateQuestion;

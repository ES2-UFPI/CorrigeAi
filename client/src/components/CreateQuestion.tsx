import React, { MouseEventHandler } from "react";
import {Objetiva, ObjetivaCadastrada} from "./Objetiva";
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

interface iQuestions {
  type: string;
  saved: boolean;
}

interface Props {
  onSetState: MouseEventHandler<HTMLButtonElement>;
  question: iQuestions
}

const CreateQuestion: React.FC<Props> = ( {question, onSetState} ) => {

  return (
    <div>
      {(() => {
        switch (question.type) {
          case "objetiva":
            return question.saved ? <ObjetivaCadastrada /> : <Objetiva/>;
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

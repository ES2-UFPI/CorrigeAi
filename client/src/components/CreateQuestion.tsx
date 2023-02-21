import React from "react";
import Objetiva from "./Objetiva";
import Subjetiva from "./Subjetiva";
import VerdadeiroOuFalso from "./VerdadeiroOuFalso";


const CreateQuestion: React.FC<{typeOfQuestion:string}> = ( {typeOfQuestion } ) => {
  return (
    <div>
      {(() => {
        switch (typeOfQuestion) {
          case "objetiva":
            return <Objetiva />;
          case "subjetiva":
            return <Subjetiva />;
          case "verdadeiroOuFalso":
            return <VerdadeiroOuFalso />;
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default CreateQuestion;

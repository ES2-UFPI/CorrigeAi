import React from "react";
import Objetiva from "./Objetiva";
import Subjetiva from "./Subjetiva";


const CreateQuestion: React.FC<{title:string}> = ( {title} ) => {
  return (
    <div>
      {(() => {
        switch (title) {
          case "objetiva":
            return <Objetiva />;
          case "subjetiva":
            return <Subjetiva />;
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default CreateQuestion;

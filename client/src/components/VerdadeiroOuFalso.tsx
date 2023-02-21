import React, { DetailedHTMLProps } from 'react'
import { useState, useEffect  } from 'react';
import { useAsyncValue } from 'react-router-dom';
import './Styles.css'

type Alternative = {
  text: string;
  isTrue: boolean;
};

type FormValues = {
  question: string;
  alternatives: Alternative[];
};

const initialFormValues: FormValues = {
  question: "",
  alternatives: [{ text: "", isTrue: false }],
};


function VerdadeiroOuFalso( {  } ) {

  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = event.target;
    const newAlternatives = [...formValues.alternatives];
    newAlternatives[index] = { ...newAlternatives[index], [name]: value };
    setFormValues({ ...formValues, alternatives: newAlternatives });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { checked } = event.target;
    const newAlternatives = [...formValues.alternatives];
    newAlternatives[index] = { ...newAlternatives[index], isTrue: checked };
    setFormValues({ ...formValues, alternatives: newAlternatives });
  };

  const handleAddAlternative = () => {
    setFormValues({ ...formValues, alternatives: [...formValues.alternatives, { text: "", isTrue: false }] });
  };

  const handleRemoveAlternative = (index: number) => {
    const newAlternatives = [...formValues.alternatives];
    newAlternatives.splice(index, 1);
    setFormValues({ ...formValues, alternatives: newAlternatives });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Form values", formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="question">Question:</label>
      <input
        type="text"
        id="question"
        name="question"
        value={formValues.question}
        onChange={(event) => setFormValues({ ...formValues, question: event.target.value })}
      />
    </div>
    {formValues.alternatives.map((alternative, index) => (
      <div key={index}>
        <label htmlFor={`alternative-${index}`}>Alternative {index + 1}:</label>
        <input
          type="text"
          id={`alternative-${index}`}
          name="text"
          value={alternative.text}
          onChange={(event) => handleInputChange(event, index)}
        />
        <label>
          <input
            type="checkbox"
            checked={alternative.isTrue}
            onChange={(event) => handleCheckboxChange(event, index)}
          />
          True
        </label>
        {index > 0 && (
          <button type="button" onClick={() => handleRemoveAlternative(index)}>
            Remove Alternative
          </button>
        )}
      </div>
    ))}
    <button type="button" onClick={handleAddAlternative}>
      Add Alternative
    </button>
    <button type="submit">Register Question</button>
  </form>
  )
}
export default VerdadeiroOuFalso
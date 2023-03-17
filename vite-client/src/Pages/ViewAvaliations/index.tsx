import React, { useState, useEffect } from 'react';
import { PropsForm } from "../../components/FormAvaliation"
import { Avaliations, Avaliation } from "./styles";
import { Link } from "react-router-dom";

interface iForms extends PropsForm {
  _id: string;
}

export function ViewAvaliations(){

  const [forms, setForms] = useState<iForms[]>([]);
  const [selectedForm, setSelectedForm] = useState<iForms | null>(null);

  const handleFormClick = (form: iForms) => {
    setSelectedForm(form);
  };

  useEffect(() => {
    const fetchForms = async () => {
      const response = await fetch('http://localhost:3000/getAvaliations');
      const data = await response.json();
      console.log(data.form);
      setForms(data.form);
    };
    fetchForms();
  }, []);

  return (
    <Avaliations>
      <h1>Provas Cadastradas</h1>
      {forms.map((form) => (
        <Avaliation key={form._id}>
          <h2>{form.typeAvaliation}</h2>
          <p>Tema: {form.themeAvaliation}</p>
          <p>Tipo de Avaliação: {form.typeAvaliation}</p>
          <p>Data Inicial: {form.initialAvaliation}</p>
          <p>Data Final: {form.finalAvaliation}</p>
          <p>Points: {form.points}</p>
          <Link to="/solve-avaliation" state={ form }>
            <button>Acessar Prova</button>
          </Link>
        </Avaliation>
      ))}
    </Avaliations>
  )
}
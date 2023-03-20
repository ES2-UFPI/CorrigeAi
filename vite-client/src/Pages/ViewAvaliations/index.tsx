import React, { useState, useEffect } from 'react';

import { PropsForm } from "../../components/FormAvaliation"
import { Avaliations, Avaliation, AboutAvaliation, ButtonsAvaliation } from "./styles";
import { Link } from "react-router-dom";

import { Wrapper } from '../../styles/Layout';

import { ButtonGreen } from '../../components/ButtonGreen';

interface iForms extends PropsForm {
  _id: string;
}

export function ViewAvaliations(){

  const [forms, setForms] = useState<iForms[]>([]);
  const [selectedForm, setSelectedForm] = useState<iForms | null>(null);

  useEffect(() => {
    const fetchForms = async () => {
      const response = await fetch('http://localhost:3000/getAvaliations');
      const data = await response.json();
      console.log(data.Avaliations);
      setForms(data.Avaliations);
    };
    fetchForms();
  }, []);

  return (
    <Avaliations>
      <Wrapper className='Wrapper'>
        <h1>Provas Cadastradas</h1>
        {forms.map((form) => (
          <Avaliation key={form._id}>
            <AboutAvaliation>
              <h2>{form.typeAvaliation === 'exam' ? 'Prova' : 'Tarefa'}</h2>
              <hr />
              <p><strong>Tema</strong>: {form.themeAvaliation}</p>
              <p><strong>Tipo de Avaliação</strong>: {form.typeAvaliation === 'exam' ? 'Prova' : 'Tarefa'}</p>
              <p><strong>Data Inicial</strong>: {form.initialAvaliation}</p>
              <p><strong>Data Final</strong>: {form.finalAvaliation}</p>
              <p><strong>Points</strong>: {form.points}</p>
            </AboutAvaliation>
            
            <ButtonsAvaliation>
              <Link to="/solve-avaliation" state={ form }>
                <ButtonGreen>Acessar</ButtonGreen>
              </Link>
              <Link to="#" state={ form }>
                <ButtonGreen>Ver prova</ButtonGreen>
              </Link>
              <Link to="#" state={ form }>
                <ButtonGreen>Corrigir</ButtonGreen>
              </Link>
            </ButtonsAvaliation>
            
          </Avaliation>
        ))}
      </Wrapper>
    </Avaliations>
  )
}
import React, { useState, useEffect } from 'react';

import { PropsForm } from "../../../components/FormAvaliation"
import { Avaliations, Avaliation, AboutAvaliation, ButtonsAvaliation } from "./styles";
import { Link } from "react-router-dom";

import { Wrapper } from '../../../styles/Layout';

import { ButtonGreen } from '../../../components/ButtonGreen';
import { Layout } from '../../../components/Layout';

interface iForms extends PropsForm {
  _id: string;
}

export function ViewAvaliationsStudent(){

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
    <Layout>
      <Avaliations>
        <Wrapper className='Wrapper'>
          <h1>Provas Cadastradas</h1>
          {
            forms.length > 0 ?
              forms.map((form) => (
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
                  <Link to="#" state={ form }>
                    <ButtonGreen>Ver prova</ButtonGreen>
                  </Link>
                  <Link to="/solve-avaliation" state={ form }>
                    <ButtonGreen>Responder</ButtonGreen>
                  </Link>
                </ButtonsAvaliation>
                
              </Avaliation>
            ))
          :
            <p style={{
              color: 'var(--primary)',
              fontSize: '1.8rem',
              marginTop: '1rem'
            }}>Nenhuma prova cadastrada!
            </p>
          }
        </Wrapper>
      </Avaliations>
    </Layout>
  )
}
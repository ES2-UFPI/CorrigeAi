import { useState } from "react";
import { Layout } from "../../components/Layout";
import { Wrapper } from "../../styles/Layout";
import { ButtonSaveClass, Class, Form } from "./styles";


export function CreateClass(){

  const [className, setClassName] = useState<string>('');
  const [classSummary, setClassSummary] = useState<string>('');

  function hanldeSubmitClass(){
    const classData = {
      className,
      classSummary
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(classData)
    };

    fetch('http://localhost:3000/createClass', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // add code to handle successful class registration
      })
      .catch(error => console.error(error));
  }

  return (
    <Layout>
      <Class>
        <Wrapper>
          <Form onSubmit={e => e.preventDefault()}>
            <legend>
              <h2>Criar nova turma</h2>
            </legend>

            <label htmlFor="nameClass">Nome da turma:</label>
            <input type="text" placeholder="Nome da turma"
              value={className} onChange={(e) => setClassName(e.target.value)} />

            <label htmlFor="dicipline">Diciplina: </label>
            <input type="text" placeholder="Qual diciplina?"/>
            
            <label htmlFor="menuDicipline">Ementa: </label>
            <textarea
              name="postContent"
              rows={4}
              cols={40}
              placeholder="Ementa da diciplina..."
              value={classSummary} onChange={(e) => setClassSummary(e.target.value)} 
            />
          </Form>

          <ButtonSaveClass onClick={hanldeSubmitClass}>
            Cadastrar Turma
          </ButtonSaveClass>

        </Wrapper>
      </Class>
    </Layout>
  )
}
import { Wrapper } from "../../styles/Layout";
import { ButtonSaveClass, Class, Form } from "./styles";

export function CreateClass(){
  function hanldeSubmitClass(){

  }

  return (
    <Class>
      <Wrapper>
        <Form>
          <legend>
            <h2>Criar nova turma</h2>
          </legend>

          <label htmlFor="nameClass">Nome da turma:</label>
          <input type="text" placeholder="Nome da turma"/>

          <label htmlFor="dicipline">Diciplina: </label>
          <input type="text" placeholder="Qual diciplina?"/>
          
          <label htmlFor="menuDicipline">Ementa: </label>
          <textarea
            name="postContent"
            rows={4}
            cols={40}
            placeholder="Ementa da diciplina..."
          />
        </Form>

        <ButtonSaveClass
          onClick={hanldeSubmitClass}>
          Cadastrar Turma
        </ButtonSaveClass>

      </Wrapper>
    </Class>
  )
}
import styled from "styled-components";

export const CreateQuestionsStyled = styled.div`
  width: 100%;
  padding: 10rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SubForm = styled.div`
  width: 100%;
  padding: 0 4rem;

  label {
    color: white;
  }
  
  h3 {
    color: #272643; 
    font-size: 2.4rem;
  }

  textarea {
    border-radius: .8rem;
  }
`

export const ButtonAddQuestion = styled.button `
  margin: 1rem 0 1rem;
  border-radius: .8rem;
  padding: .5rem 2rem;
  border: none; 
  cursor: pointer;

  :hover {
    background-color: rgb(39, 38, 67, 0.09);
  }
`


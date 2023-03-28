import styled from "styled-components";

export const CreateQuestionsStyled = styled.div`
  width: 100%;
  padding: 10rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ButtonAddQuestion = styled.button `
  margin: 1rem 0 1rem;
  border-radius: .8rem;
  padding: .5rem 2rem;
  border: none; 
  cursor: pointer;

  transition: .2s;
  
  :hover {
    background-color: #76DC28;
    color: white;
    text-shadow: 1px 1px 1px black;
  }
`


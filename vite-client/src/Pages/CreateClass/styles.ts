import styled from "styled-components";
import { ContainerButtonGreen } from "../../components/ButtonGreen/styles";

export const Class = styled.div `
  padding: 1rem 1rem;
`

export const Form = styled.form`
  width: 100%;
  background-color: var(--primary);
  
  padding: 2rem 3rem 3rem;
  margin: 3rem;
  border-radius: 2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);

  h2 {
    color: var(--secondary);
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  label {
    color: var(--secondary);
  }

  input {
    display: block;
    margin: .5rem 0 1rem;
    
    padding: 2rem;
    width: 100%;

    border-radius: 2rem;
    border: none;
    height: 4rem;
  }
  
  textarea {
    display: block;
    box-sizing: border-box;
    border-radius: .8rem;
    border: none;

    width: 100%;
    padding: 1rem;
    line-height: 24px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

    &:focus {
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    }
  }
`

export const ButtonSaveClass = styled(ContainerButtonGreen) `
  padding: 1rem 4rem;
  border-radius: 2rem;
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0;
`

import styled from "styled-components";

export const Form = styled.form `
  width: 100%;
  max-width: 800px;

  padding: 3rem 2rem 4rem;
  margin: 30px 30px;
  border-radius: 20px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  
  background: #c9d5ff;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1rem;

  h2 {
    margin-bottom: 1rem;  
    font-size: 3rem;
  }

  h2, p, label {
    color: #272643;
  }

  input {
    width: 100%;
    border-radius: 2rem;
    border: none;
    height: 4rem;
    padding: 2rem;
  }
  
  hr {
    margin: 2rem;
    height: 1px;
    background-color: #27264352;
    border: none;
  }
`


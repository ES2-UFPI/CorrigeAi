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
  gap: .5rem;

  h2 {
    margin-bottom: 1rem;  
    font-size: 3rem;
  }

  h2, p, label {
    color: #272643;
  }

  h3 {
    color: #272643;
  }

  input {
    width: 100%;
    border-radius: 2rem;
    border: none;
    height: 4rem;
    padding: 2rem;
    margin-bottom: 1rem;
  }

  hr {
    margin: 2rem;
    height: 1px;
    background-color: rgb(106,90,205, 0.30);
    border: none;
  }
`
export const SubForm = styled.div`
  width: 100%;
  padding: 0 4rem;

  label {
    color: white;
  }
  
  h3 {
    font-size: 2.4rem;
  }

  textarea {
    border-radius: .8rem;
  }

  div {
    h4 {
      color: white;
      font-size: 2.2rem;
    }  
    
    div > hr {
      margin: 2rem;
      height: 1px;
      background-color: rgb(72,61,139);
      border: none;
    }
  }

`


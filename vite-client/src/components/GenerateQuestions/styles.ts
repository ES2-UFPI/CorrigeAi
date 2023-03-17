import styled from "styled-components";

export const GenerateQuestionStyled = styled.div `
  background: #272643	;
  margin-top: 1.5rem;
  padding: 20px 20px;
  border-radius: 20px;
  width: 100%;

  h2, p, h3, label {
    color: #c9d5ff;
  }

  textarea {
    width: 100%; 
  }

  hr {
    background-color: rgb(229, 229, 229, 0.29);
  }
  
  label:nth-child(1){
    margin: 0;
  }

  label {
    margin-bottom: .5rem;
    display: inline-block;
  }
`
export const TypeQuestion = styled.div `
  display: flex; 
  align-items: center; 
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const ButtonDeleteQuestion = styled.button `
  margin-top: 1rem;
  padding: .5rem 2rem;
  border-radius: .8rem;
  border: none;
  cursor: pointer;
  background-color: #B8282A;
  color: white;

  :hover {
    background-color:#8E1F21;
  }
`

export const ButtonAddAlternative = styled.button `
  width: 2rem;
  height: 2rem;

  border-radius: 50%;
  border: none;
  cursor: pointer;
  margin: 1rem 0rem;

  :hover {
    background: #76DC28;
  }
`

export const Alternative = styled.div `
  margin-bottom: 1rem;

  label:nth-child(1) {
    display: block;
  }

  label:nth-child(2) {
    width: 10rem;
  }

  input {
    border-radius: .8rem;
    margin: 0;
  }

  .trueFalse {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    label:nth-child(2){
      margin-right: 1rem;
    }

    input {
      width: 1.5rem;
      margin: 0;
      margin-right: .5rem;
    }

    button {
      width: 50%;
      padding: .5rem 2rem;
      border-radius: .8rem;
      border: none;
      background: #B8282A;
      color: white;

      cursor: pointer;
      
      :hover {
        background: #8E1F21;
      }
    }
  }

  .objective {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      label {
        margin: 0;
        width: 100%;
      }
    }

    input {
      width: 2rem;
    }

    button {
      width: 50%;
      padding: .5rem 2rem;
      border-radius: .8rem;
      border: none;
      background: #B8282A;
      color: white;
      cursor: pointer;
      
      :hover {
        background: #8E1F21;
      }
    }
  }
`

import styled from "styled-components";

export const Avaliation = styled.div`
  width: 100%; 
  min-height: 100vh;
  padding: 1rem 1rem;
  background: #c9d5ff;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #1b1f2f;

  .questions {
    display: flex; 
    flex-direction: column;
    align-items: center;
    
    > * {
      width: 100%;
    }
  }
`

export const Container = styled.div `
  h3 {
    margin-top: 1.5rem;
    font-size: 2.2rem;
  }

  .aboutAvaliation {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(72,61,139,.30);
    padding: 1rem;
    border-radius: 2rem;
  }
`

export const QuestionStyle = styled.div`
  width: 80%;
  background: #272643;
  padding: 20px 20px;
  color: #fff;
  border-radius: 20px;
  margin-top: 2rem;

  textarea {
    width: 100%;
    border-radius: .8rem;
  }

  h4 {
    font-size: 1.8rem;
    color: #C9D5FF;
    margin-bottom: 1rem;
  }
  
  &.subjective {
    label {
      display: inline-block;
      margin-bottom: .5rem;
    }
  }
`

export const AlternativesTrueFalse = styled.div `
  display: flex; 
  flex-direction: column; 

  div {
    display: flex; 
    align-items: center; 
    justify-content: space-between;

    input {
      margin-right: .5rem;
      width: 1.5rem;
      height: 1.5rem;
    }
    input[type="checkbox"] {
      appearance: none;
      border-radius: 50%;
      width: 1.5rem;
      height: 1.5rem;
      border: 1px solid white;
      outline: none;
      cursor: pointer;
    }

    input[type="checkbox"]:checked {
      background-color: #00BFFF;
    }

    label:nth-child(2){
      color: #76DC28;
    }

    label:nth-child(4){
      color: #B8282A;
    }

    input+label:nth-child(2){
      margin-right: 1rem;
    }
  }
`

export const AlternativesObjective = styled(AlternativesTrueFalse) `
  gap: .5rem;

  div {
    justify-content: flex-start;
    align-items: center;
  }
  
`




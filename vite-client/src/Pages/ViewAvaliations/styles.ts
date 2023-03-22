import styled from "styled-components";

export const Avaliations = styled.div`
  width: 100%; 
  min-height: 100vh;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #1b1f2f;

  h1 {
    color: var(--primary);
  }
`

export const Avaliation = styled.div`
  background: #272643;
  padding: 20px 20px;
  color: #fff;
  border-radius: 20px;
  margin-top: 30px;

  width: 100%;
  display: flex; 
  flex-direction: column; 
  align-items: center;

  h2 {
    color: var(--primary);
  }
`

export const AboutAvaliation = styled.div `
  border-radius: 2rem;
  padding: .5rem 4rem 1rem;
  width: 100%;
  background: var(--about);

  display: flex;
  flex-direction: column;

  strong {
    color: var(--primary);
  }

  hr {
    height: 1px;
    background-color: rgb(72,61,139);
    border: none;
    margin: .5rem 0rem 1rem;
  }
`

export const ButtonsAvaliation = styled.div `
  display: flex;
  gap: 1rem;
`



import styled from "styled-components";

export const HomeClassContainer = styled.div `
  width: 100%;
  padding: 1rem;
  background-color: var(--secondary);

  h2 {
    margin-bottom: 1rem;
  }
`

export const ButtonsClass = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    margin: 0;
    width: 100%;
  }  
  
  margin-bottom: 2rem;
`

export const News = styled.div `
  display: flex; 
  gap: 1rem;
`

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--about);
  border: 1px solid var(--gray);
  border-radius: 5px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  hr {
    height: 1px;
    background-color: rgb(72,61,139);
    border: none;
    margin-block: .5rem;
  }
`;

export const NewsTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: var(--primary);
`;

export const NewsContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

export const NewsAuthor = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: var(--primary);
`;
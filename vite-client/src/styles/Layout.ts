import styled from 'styled-components'

export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  max-width: 800px;
  padding: 0 2rem;
  margin: 0 auto;  
`;

export const WrapperLayout = styled.div `
  display: flex;
  grid-template-columns: 1fr 3fr;
`

export const Main = styled.div `
  width: 100%;
`

export const Header = styled.header `
  display: flex; 
  align-items: center;
  justify-content: space-between;
  
  padding: 1rem 2rem;
  margin: 0 auto;
  background-color: var(--about);

  color: var(--primary);
  border-bottom: 1px solid rgb(133, 128, 204, .30);

  div {
    display: flex; 
    gap: 1rem;

    button {
      background-color: transparent;
      width: 20px;
      height: 20px;
      border: none;
      margin: 0;
      padding: 0;
    }
  }
`
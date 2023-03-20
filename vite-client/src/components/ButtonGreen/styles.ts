import styled from "styled-components";

export const Container = styled.button `
  margin-top: 1rem;
  padding: .5rem 2rem; 
  border: none;
  border-radius: .8rem;
  
  font-weight: bold;
  font-size: 1.2rem;
  background: var(--primary);
  
  transition: .2s;
  
  :hover {
    background: var(--greenHover);
    color: white; 
    text-shadow: 1px 1px 1px black;
  }
  cursor: pointer;
`
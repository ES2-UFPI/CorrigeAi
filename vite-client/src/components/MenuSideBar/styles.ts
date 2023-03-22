import styled from "styled-components";

interface Props {
  width: string
}

export const MenuSideBarContainer = styled.div<Props> `
  background: var(--menuSideBar);
  color: var(--secondary);
  
  display: flex; 
  flex-direction: column;
  max-width: 30rem;
  width: ${ props => props.width };
  padding: 1rem;
`

export const AboutMenu = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
`

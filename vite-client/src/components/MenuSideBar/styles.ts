import styled from "styled-components";

interface Props {
  width: string
}

export const MenuSideBarContainer = styled.div<Props> `
  background: var(--menuSideBar);
  color: var(--secondary);
  
  border-radius: 0 .8rem .8rem 0;
  display: flex; 
  flex-direction: column;
  max-width: 30rem;
  width: ${ props => props.width };
  padding: 1rem;

  transition: 1s;
`

export const AboutMenu = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
`

import styled from "styled-components";
import { ContainerButtonGreen } from "../../components/ButtonGreen/styles"

export const Classes = styled.div `
  padding: 1rem 1rem;
  background-color: var(--secondary);

  h1 {
    margin-bottom: 1rem;
  }
`

export const ContainerClasses = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Class = styled.div `
  color: var(--secondary);
  background-color: var(--primary);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  
  width: 100%;
  padding: 1rem 2rem;
  border-radius: .8rem;
  margin-bottom: 1rem;

  hr {
    margin: .5rem 0rem 1rem;
    height: 1px;
    background-color: rgb(106,90,205,0.30);
    border: none;
  }

  p {
    margin-bottom: 1rem;
  }
`

export const ButtonAccessClass = styled(ContainerButtonGreen) `
  background: var(--about);
  margin: 0%;
`


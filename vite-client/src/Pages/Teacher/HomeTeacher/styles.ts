import styled from "styled-components";

export const HomePage = styled.div`
  background: #272643;
  width: 100%; 
  padding: 1rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`

export const Classes = styled.ul `
  width: 100%;
  border: 1px solid var(--primary);
  border-radius: .8rem;
  background-color: var(--primary);
  margin-bottom: 2rem;

  color: var(--secondary);
  
  div {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }
`

export const Class = styled.div `
  border-radius: .8rem;
  padding: .8rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;

  justify-items: center;
  color: var(--secondary);

  overflow: hidden;
  &.even {
    background-color: var(--about);
  }
  &.odd {
    background-color: #c9c9ff;
  }
`

export const link = styled.a`
  color: #61dafb;
`



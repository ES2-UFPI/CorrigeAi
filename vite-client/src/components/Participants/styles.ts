import styled from "styled-components";

export const ParticipantsContainer = styled.div `
  .participants {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const Participant = styled.div `
  display: flex; 
  align-items: center;
  gap: 1rem;
  background-color: var(--primary);
  
  border-radius: .8rem;
  padding: 1rem;
  color: var(--secondary);
`

export const InfoUser = styled.div `
  display: flex; 
  flex-direction: column; 
`
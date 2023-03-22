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

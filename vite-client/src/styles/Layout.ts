import { useContext } from 'react';
import styled from 'styled-components'

interface Props {
  display: string
}

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

export const WrapperLayout = styled.div<Props> `
  display: ${props => props.display};
  grid-template-columns: 1fr 3fr;
  height: 100%;
`

// let WrapperLayout = ''
// if (sideBar){
//   WrapperLayout = styled.div `
//     display: grid;
//     grid-template-columns: 1fr 3fr;
//     height: 100%;
//   `
// } else {
//   WrapperLayout = styled.div `
//     display: flex;
//     height: 100%;
//   `
// }

// export { WrapperLayout }

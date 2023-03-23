import styled from "styled-components";

interface Props {
  width: string
}

export const MenuSideBarContainer = styled.div<Props> `
  height: 100vh;
  color: var(--secondary);
  
  border-radius: 0 .8rem .8rem 0;
  display: flex; 
  flex-direction: column;
  max-width: 28rem;
  width: ${ props => props.width };
  padding: 1rem;
  
  transition: 1s;
  position: relative;
  
  .contentMenu {
    border-right: 1px solid black;
    position: fixed;
    background: var(--menuSideBar);
    padding: 1rem;
    
    border-radius: .8rem;
    top: 0rem;
    bottom: 0;
    left: 0rem;
    width: 4rem;

    transition: 1s;

    .content-buttons {
      opacity: 0;
      transition: 0s;
    }

    div:nth-child(2) {
      opacity: 0;
      transform: translateX(-100%);
    }
  }
  
  .contentMenu.visible {
    width: 28rem;
    div:nth-child(2) {
      transform: translateX(0);
    }

    .content-buttons {
      opacity: 1;
      transition: 1s;
    }
  } 
`

export const AboutMenu = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.about {
    transition: 1s;
    width: 10px;
  }

  &.about.visible {
    width: 26rem;
  }
`

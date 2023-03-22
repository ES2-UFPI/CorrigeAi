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
  position: relative;

  .contentMenu {
    position: fixed;
    top: 1rem;
    bottom: 0;
    left: 1rem;
    width: 0rem;

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
    width: 28rem;
  }
`

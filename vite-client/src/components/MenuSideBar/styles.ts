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

    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: .5rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--primary);
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      background-color: var(--about);
    }
    
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

      a {
        text-decoration: none;
      }
    }

    .content-buttons > a button {
      background-color: var(--redButton) !important;
      color: white;
      width: 10rem;

      &:hover {
        background: var(--redButtonHover);
      }
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

export const DropdownMenu = styled.ul`
  background-color: var(--about);
  border-radius: .8rem;
  list-style: none;
  margin: 0;
  padding: 1rem; 
  
  a {
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
    text-decoration: none;
    text-shadow: 1px 1px 2px black;
    
    &:hover {
      color: var(--secondary);
      text-shadow: 1px 1px 2px var(--primary);
    }
  }

  li {
    cursor: pointer;
  }
`

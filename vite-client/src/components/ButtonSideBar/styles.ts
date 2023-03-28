import styled from "styled-components";
import { IButtonSideBar } from ".";

export const ButtonSideBarContainer = styled.button<IButtonSideBar>`
  width: 100%;
  color: var(--secondary);
  
  padding: 1rem;
  margin-top: 20px;
  border: 1px solid var(--about);
  border-radius: 10px;
  text-decoration: none;

  font-weight: bold;
  
  :hover {
    background-color: #07ffa4;
    color: var(--secondary);
    cursor: pointer;
  }
  
`
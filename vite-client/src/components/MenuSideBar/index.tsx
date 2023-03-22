import { useState } from "react";
import { Link } from "react-router-dom";

import { CloseButton } from "../../assets/CloseButton";
import { ButtonSideBar } from "../ButtonSideBar";
import { AboutMenu, MenuSideBarContainer } from "./styles";

interface IMenuSideBar {
  sideBar: boolean
  width: string
  handleCloseBar: () => void
}
export function MenuSideBar({sideBar, width, handleCloseBar}: IMenuSideBar){
  return (
    <MenuSideBarContainer
      width={width}
    >
      <AboutMenu>
        {sideBar && <h2>Menu: </h2>}
        <button 
          onClick={() => handleCloseBar()}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '0',
            height: '25px',
          }}>
          <CloseButton />
        </button>
      </AboutMenu>

      {sideBar && <div>
        <Link
          to="/form-avaliation"
        >
          <ButtonSideBar>
            Cadastrar prova ou tarefa
          </ButtonSideBar>
        </Link>
        <Link
          to="/view-avaliations"
        >
          <ButtonSideBar>
            Ver provas e tarefas cadastradas
          </ButtonSideBar>
        </Link>
        <Link
          to="/create-class"
        >
          <ButtonSideBar>
            Criar nova turma
          </ButtonSideBar>
        </Link>
        <Link
          to="/view-classes"
        >
          <ButtonSideBar>
            Ver turmas cadastradas
          </ButtonSideBar>
        </Link>
      </div>
      }
    </MenuSideBarContainer>
  )
}
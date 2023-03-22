import { Link } from "react-router-dom";

import { CloseButton } from "../../assets/CloseButton";
import { ButtonSideBar } from "../ButtonSideBar";
import { AboutMenu, MenuSideBarContainer } from "./styles";

interface IMenuSideBar {
  sideBar: boolean
  width: string
  handleCloseBar: () => void
  scale: string
}

export function MenuSideBar({sideBar, width, handleCloseBar, scale}: IMenuSideBar){
  return (
    <MenuSideBarContainer
      width={width}
    >
      <div className={`contentMenu ${sideBar ? 'visible' : ''}`} >
        <AboutMenu className={`about ${sideBar ? 'visible' : ''}`}>
          {sideBar && <h2>Menu: </h2>}
          <button
            onClick={() => handleCloseBar()}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '0',
              height: '25px',
              transform: `${scale}`,
              transition: '1s'
            }}>
            <CloseButton />
          </button>
        </AboutMenu>
       
        <div className="content-buttons">
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
      </div>
    </MenuSideBarContainer>
  )
}
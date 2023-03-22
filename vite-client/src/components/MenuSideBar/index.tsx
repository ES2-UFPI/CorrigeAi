import { Link } from "react-router-dom";
import { CloseButton } from "../../assets/CloseButton";
import { ButtonSideBar } from "../ButtonSideBar";
import { AboutMenu, MenuSideBarContainer } from "./styles";

export function MenuSideBar(){
  return (
    <MenuSideBarContainer>
      <AboutMenu>
        <h2>Menu: </h2>
        <CloseButton />
      </AboutMenu>
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
    </MenuSideBarContainer>
  )
}
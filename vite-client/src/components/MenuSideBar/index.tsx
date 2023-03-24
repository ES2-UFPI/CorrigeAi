import { useState } from 'react'
import { Link } from 'react-router-dom'

import { CloseButton } from '../../assets/CloseButton'
import { ButtonSideBar } from '../ButtonSideBar'
import { AboutMenu, DropdownMenu, MenuSideBarContainer } from './styles'

interface IMenuSideBar {
  sideBar: boolean
  width: string
  handleCloseBar: () => void
  scale: string
}

export function MenuSideBar({
  sideBar,
  width,
  handleCloseBar,
  scale
}: IMenuSideBar) {
  const [classOption, setClassOption] = useState(false);
  const [avaliationOption, setAvaliationOption] = useState(false);
  const [teacherOption, setTeacherOption] = useState(false);

  function handleClassOption() {
    setClassOption(!classOption)
  }

  function handleAvaliationOption() {
    setAvaliationOption(!avaliationOption)
  }

  function handleTeacherOption() {
    setTeacherOption(!teacherOption)
  }

  return (
    <MenuSideBarContainer width={width}>
      <div className={`contentMenu ${sideBar ? 'visible' : ''}`}>
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
            }}
          >
            <CloseButton />
          </button>
        </AboutMenu>

        <div className="content-buttons">
          <Link to="#" onClick={handleTeacherOption}>
            <ButtonSideBar>Professor</ButtonSideBar>
          </Link>
          {teacherOption && (
            <DropdownMenu>
              <Link to="#">
                <li>Ver perfil</li>
              </Link>
            </DropdownMenu>
          )}

          <Link to="#" onClick={handleClassOption}>
            <ButtonSideBar>Turma</ButtonSideBar>
          </Link>
          {classOption && (
            <DropdownMenu>
              <Link to="#">
                <li>Criar turma</li>
              </Link>
              <Link to="#">
                <li>Ver turmas cadastradas</li>
              </Link>
              <Link to="#">
                <li>Participantes</li>
              </Link>
              {/* <Link to="#">
                <li>Novo participante</li>
              </Link>
              <Link to="#">
                <li>Noticias</li>
              </Link> 
              <Link to="#">
                <li>Cadastrar Noticias</li>
              </Link>
              */}
            </DropdownMenu>
          )}

          <Link to="#" onClick={handleAvaliationOption}>
            <ButtonSideBar>Avaliação</ButtonSideBar>
          </Link>
          {avaliationOption && (
            <DropdownMenu>
              <Link to="#">
                <li>Cadastrar prova ou tarefa</li>
              </Link>
              <Link to="#">
                <li>Ver provas e tarefas</li>
              </Link>
              </DropdownMenu>
            )}

          <Link to="/form-avaliation">
            <ButtonSideBar>Cadastrar prova ou tarefa</ButtonSideBar>
          </Link>

          <Link to="/view-avaliations">
            <ButtonSideBar>Ver provas e tarefas cadastradas</ButtonSideBar>
          </Link>

          <Link to="/create-class">
            <ButtonSideBar>Criar nova turma</ButtonSideBar>
          </Link>

          <Link to="/view-classes">
            <ButtonSideBar>Ver turmas cadastradas</ButtonSideBar>
          </Link>
        </div>
      </div>
    </MenuSideBarContainer>
  )
}

// import React, { useState } from 'react';
// import styled from 'styled-components';

// const Menu = styled.div`
//   background-color: #f2f2f2;
//   border: 1px solid #ccc;
//   border-radius: 3px;
//   cursor: pointer;
//   display: inline-block;
//   padding: 8px;
// `;

// const DropdownMenu = styled.ul`
//   background-color: black;
//   border: 1px solid #ccc;
//   border-radius: 3px;
//   list-style: none;
//   margin: 0;
//   padding: 0;

//   li {
//     padding: 8px;
//   }
// `;

// export function MenuSideBar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMenuOpen1, setIsMenuOpen1] = useState(false);

//   const handleMenuClick = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   const handleMenuClick1 = () => {
//     setIsMenuOpen1(!isMenuOpen1);
//   };

//   return (
//     <div style={{background: 'yellow'}}>
//       <a onClick={handleMenuClick}>
//         <ButtonSideBar>
//           Teste
//         </ButtonSideBar>
//       </a>
//       {isMenuOpen && (
//         <DropdownMenu>
//           <div>Item 1</div>
//           <div>Item 1</div>
//           <div>Item 1</div>
//         </DropdownMenu>
//       )}
//       <a onClick={handleMenuClick1}>
//       <ButtonSideBar>
//           Teste1
//         </ButtonSideBar>
//       </a>
//       {isMenuOpen1 && (
//         <DropdownMenu>
//           <div>Item 1</div>
//           <div>Item 1</div>
//           <div>Item 1</div>
//         </DropdownMenu>
//       )}
//     </div>
//   );
// }

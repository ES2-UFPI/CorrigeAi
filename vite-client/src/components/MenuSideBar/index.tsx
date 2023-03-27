import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { CloseButton } from '../../assets/CloseButton'
import { AuthContext } from '../../context/AuthContext'
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

  const { signOut, signed } = useContext(AuthContext)
  const [user, setUser] = useState(getUserFromLocalStorage())

  function getUserFromLocalStorage() {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  useEffect(() => {
    const updatedUser = getUserFromLocalStorage();
    if (updatedUser !== user) {
      setUser(updatedUser);
    }
  }, []);

  useEffect(() => {
  }, [classOption, avaliationOption, teacherOption])

  const navigate = useNavigate()
  
  function handleClassOption() {
    setClassOption(!classOption)
  }

  function handleAvaliationOption() {
    setAvaliationOption(!avaliationOption)
  }

  function handleTeacherOption() {
    setTeacherOption(!teacherOption)
  }

  function handleSignOut(){
    signOut()
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
          <div>
            <Link to='/home'>
              <ButtonSideBar isSelected={false} isHome={true}>
                Home
              </ButtonSideBar>
            </Link>
            {
              user?.professor ? (
                <Link to="#" onClick={handleTeacherOption}>
                  <ButtonSideBar isSelected={teacherOption}>
                    Professor
                  </ButtonSideBar>
                </Link>
              ) : (
                <Link to="#" onClick={handleTeacherOption}>
                  <ButtonSideBar isSelected={teacherOption}>Aluno</ButtonSideBar>
                </Link>
              )
            }
            {teacherOption && (
              <DropdownMenu>
                <Link to="#">
                  <li>Ver perfil</li>
                </Link>
              </DropdownMenu>
            )}
            <Link to="#" onClick={handleClassOption}>
              <ButtonSideBar isSelected={classOption}>
                Turma
              </ButtonSideBar>
            </Link>
            {classOption && (
              <DropdownMenu>
                <Link to="#">
                  <li>Participantes</li>
                </Link>
                {
                  user?.professor ? (
                    <>
                      <Link to="#">
                        <li>Novo participante</li>
                      </Link>
                      <Link to="/create-class">
                        <li>Criar turma</li>
                      </Link>
                      <Link to="/view-classes">
                        <li>Ver turmas cadastradas</li>
                      </Link>
                    </>
                  ) : (
                    null
                  )
                }
                <Link to="#">
                  <li>Noticias</li>
                </Link>
                {
                  user?.professor ? (
                    <Link to="#">
                      <li>Cadastrar Noticias</li>
                    </Link>
                  ) : (
                    null
                  )
                }
              </DropdownMenu>
            )}
            <Link to="#" onClick={handleAvaliationOption}>
              <ButtonSideBar isSelected={avaliationOption}>
                Avaliação
              </ButtonSideBar>
            </Link>
            {avaliationOption && (
              <DropdownMenu>
                <Link to="/create-avaliation">
                  <li>Cadastrar prova ou tarefa</li>
                </Link>
                <Link to="/view-avaliations">
                  <li>Ver provas e tarefas</li>
                </Link>
                </DropdownMenu>
              )}
          </div>

          <Link to="/login" onClick={handleSignOut}>
            <ButtonSideBar>Sair</ButtonSideBar>
          </Link>
        </div>
      </div>
    </MenuSideBarContainer>
  )
}

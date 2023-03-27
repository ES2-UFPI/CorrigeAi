import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link, useLocation } from "react-router-dom"
import { HomeButton } from "../../assets/HomeButton"
import { ReturnButton } from "../../assets/ReturnButton"
import { AuthContext } from "../../context/AuthContext"
import { Header, Main, WrapperLayout } from "../../styles/Layout"

import { MenuSideBar } from "../MenuSideBar"

interface ILayout {
  children: React.ReactNode
}

export function Layout({children}: ILayout ) {
  const [sideBar, setSideBar] = useState(true)
  const { user } = useContext(AuthContext)

  const navigate = useNavigate();
  
  let width
  if (!sideBar){
    width = '45px'
  }else {
    width = '100%'
  }

  let scale = ''
  if (sideBar){
    scale = 'scale(1)'
  }else {
    scale = 'scale(-1)'
  }

  function handleCloseSideBar(){
    if (sideBar) {
      setSideBar(false)
    }else {
      setSideBar(true)
    }
  }

  return (
    <WrapperLayout>
      <MenuSideBar 
        handleCloseBar={handleCloseSideBar}
        sideBar={sideBar}
        width={width}
        scale={scale}
      />
      <Main>
        <Header>
          {user?.professor ? (
            <p>{user.professor?.name}</p>
          ): (
            <p>{user?.student?.name}</p>
          )}

          <div>
            <Link to='/home'>
              <HomeButton />
            </Link>
            <button onClick={ () => navigate(-1) }> 
              <ReturnButton />
            </button>
          </div>
        </Header>
        {children}
      </Main>
    </WrapperLayout>
  )
}

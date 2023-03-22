import { useState } from "react"
import { WrapperLayout } from "../../styles/Layout"

import { MenuSideBar } from "../MenuSideBar"

interface ILayout {
  children: React.ReactNode
}

export function Layout({children}: ILayout ) {
  const [sideBar, setSideBar] = useState(true)

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
      {children}
    </WrapperLayout>
  )
}
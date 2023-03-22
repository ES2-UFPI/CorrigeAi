import { useState } from "react"
import { WrapperLayout } from "../../styles/Layout"

import { MenuSideBar } from "../MenuSideBar"

interface ILayout {
  children: React.ReactNode
}

export function Layout({children}: ILayout ) {
  const [sideBar, setSideBar] = useState(false)

  let display = ''
  if (sideBar) {
    display = 'grid'  
  }else {
    display = 'flex'
  }

  let width
  if (!sideBar){
    width = '45px'
  }else {
    width = '100%'
  }

  function handleCloseSideBar(){
    if (sideBar) {
      setSideBar(false)
    }else {
      setSideBar(true)
    }
  }

  return (
    <WrapperLayout display={display}>
      <MenuSideBar 
        handleCloseBar={handleCloseSideBar}
        sideBar={sideBar}
        width={width}
      />
      {children}
    </WrapperLayout>
  )
}
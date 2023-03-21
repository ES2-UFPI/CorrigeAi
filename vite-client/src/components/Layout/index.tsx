import { WrapperLayout } from "../../styles/Layout"

import { MenuSideBar } from "../MenuSideBar"

interface ILayout {
  children: React.ReactNode
}

export function Layout({children}: ILayout ) {
  return (
    <WrapperLayout>
      <MenuSideBar />
      {children}
    </WrapperLayout>
  )
}
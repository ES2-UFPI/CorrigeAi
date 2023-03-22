import { ButtonSideBarContainer } from "./styles";

interface IButtonSideBar {
  children: React.ReactNode
}

export function ButtonSideBar({children}: IButtonSideBar){
  return (
    <ButtonSideBarContainer>  
      {children}
    </ButtonSideBarContainer>
  )
}
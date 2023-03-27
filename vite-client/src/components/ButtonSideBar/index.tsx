import { ButtonSideBarContainer } from "./styles";

export interface IButtonSideBar {
  children: React.ReactNode
  isSelected?: boolean
  isHome?: boolean
}

export function ButtonSideBar({children, isSelected, isHome}: IButtonSideBar){
  return (
    <ButtonSideBarContainer style={{
        background: isSelected ? '#07ffa4' : isHome ? 'var(--greenHover)' : 'var(--about)',
        color: isSelected ? 'var(--secondary)' : 'white',
        textShadow: isSelected ? 'none' : '1px 1px 1px var(--secondary)',
      }}>  
      {children}
    </ButtonSideBarContainer>
  )
}
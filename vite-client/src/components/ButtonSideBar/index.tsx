import { useState } from "react";
import { ButtonSideBarContainer } from "./styles";

export interface IButtonSideBar {
  children: React.ReactNode
  isSelected?: boolean
  isHome?: boolean
}

export function ButtonSideBar({children, isSelected, isHome}: IButtonSideBar){
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  
  return (
    <ButtonSideBarContainer 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: hovered
          ? 'var(--greenHover)'
          : isSelected
          ? 'var(--greenHover)'
          : isHome
          ? '#4f931a'
          : 'var(--about)'
        ,
        color: 'white',
        textShadow: '1px 1px 1px var(--secondary)',
        fontSize: '1.6rem',
        fontWeight: isSelected ? 'bold' : '500',
        transition: '.3s'
      }}>  
      {children}
    </ButtonSideBarContainer>
  )
}
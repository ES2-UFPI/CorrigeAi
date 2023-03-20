import { ContainerButtonGreen } from "./styles"

interface IButtonGreen {
  children: React.ReactNode
}

export function ButtonGreen( { children }: IButtonGreen){
  return (
    <ContainerButtonGreen>
      {children}
    </ContainerButtonGreen>
  )
}
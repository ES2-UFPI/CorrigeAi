import { Container } from "./styles"

interface IButtonGreen {
  children: React.ReactNode
}

export function ButtonGreen( { children }: IButtonGreen){
  return (
    <Container>
      {children}
    </Container>
  )
}
import { Layout } from '../../../components/Layout'
import { Wrapper } from '../../../styles/Layout'
import { HomePage } from './styles'

export function HomeStudent() {
  
  return (
    <Layout>
      <HomePage className='Home'>
        <Wrapper>
          <h1>Página Inicial do Estudante</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti quos ipsum a aut consequuntur labore numquam minus, exercitationem recusandae cupiditate nam, provident doloribus fugit voluptas repellat illum quidem aliquid?</p>

          <p>Infos proff: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, aut? Quod eligendi aspernatur officia neque quasi rem accusantium provident rerum error! Iste maiores aut perferendis quaerat eveniet adipisci corporis error.</p>
        </Wrapper>
      </HomePage>
    </Layout>
  )
}
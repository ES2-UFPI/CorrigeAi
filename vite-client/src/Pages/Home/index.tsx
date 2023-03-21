import { Link } from 'react-router-dom'
import { Layout } from '../../components/Layout'
import { HomePage } from './styles'

export function Home() {
  return (
      <HomePage>
        <h1>Página Inicial do Professor</h1>
        <Link
          to="/form-avaliation"
          style={{
            color: '#fff',
            marginTop: '20px',
            border: '1px solid white',
            padding: '6px',
            borderRadius: '10px',
            textDecoration: 'none'
          }}
        >
          Cadastrar prova ou tarefa
        </Link>

        <Link
          to="/view-avaliations"
          style={{
            color: '#fff',
            marginTop: '20px',
            border: '1px solid white',
            padding: '6px',
            borderRadius: '10px',
            textDecoration: 'none'
          }}
        >
          Ver provas e tarefas cadastradas
        </Link>

        <Link
          to="/create-class"
          style={{
            color: '#fff',
            marginTop: '20px',
            border: '1px solid white',
            padding: '6px',
            borderRadius: '10px',
            textDecoration: 'none'
          }}
        >
          Criar nova turma
        </Link>

        <Link
          to="/view-classes"
          style={{
            color: '#fff',
            marginTop: '20px',
            border: '1px solid white',
            padding: '6px',
            borderRadius: '10px',
            textDecoration: 'none'
          }}
        >
          Ver turmas cadastradas
        </Link>
      </HomePage>
  )
}

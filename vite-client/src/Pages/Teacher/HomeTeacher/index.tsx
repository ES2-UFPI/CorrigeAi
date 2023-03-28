import { useContext, useEffect, useState } from 'react'
import { Layout } from '../../../components/Layout'
import { AuthContext } from '../../../context/AuthContext'
import { Wrapper } from '../../../styles/Layout'
import { HomePage } from '../../Home/styles'

import { iClasses } from '../../ViewClasses'
import { News, NewsAuthor, NewsContainer, NewsContent, NewsTitle } from '../HomeClassTeacher/styles'
import { Class, Classes } from './styles'

export function HomeTeacher() { 
  const [classesTeacher, setClassesTeacher] = useState<iClasses[]>([])
  const { user } = useContext(AuthContext)

  useEffect(() => {
    const fetchForms = async () => {
      const response = await fetch(`http://localhost:3000/getProfessorClasses/${user?.professor?._id}`)

      const data = await response.json()
      console.log(data.findClasses)
      setClassesTeacher(data.findClasses)
    }
    fetchForms()
    console.log(classesTeacher)
  }, [])

  return (
    <Layout>
      <HomePage className='Home'>
        <Wrapper>
          <h1>Página Inicial do Professor</h1>
          <Classes>
            <div>
              <strong>Materia: </strong>
              <strong>Local: </strong>
              <strong>Horario: </strong>
            </div>
            {classesTeacher.map((_class, index) => (
              <Class key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
                <p><strong>{_class.className}</strong></p> 
                <p><strong>Local:</strong> Sala 123</p>
                <p><strong>Horario: </strong>10:00</p>
              </Class>
              ))
            }
          </Classes>

          <h2 style={{marginBottom: '1rem'}}>Notícias principais</h2>
          {/* Exibindo noticias cadastradas na turma */}
          <News>
            <NewsContainer>
              <NewsTitle>Novidades da semana</NewsTitle>
              <NewsContent>
                Olá alunos, nessa semana teremos uma prova importante sobre a matéria
                que estudamos nas últimas aulas. Certifiquem-se de estudar bem e
                comparecer na data e horário marcados.
              </NewsContent>
              <hr />
              <NewsAuthor>Prof. João da Silva <span>Mar 10/12/2022</span></NewsAuthor>
            </NewsContainer>
            
            <NewsContainer>
              <NewsTitle>Novo projeto</NewsTitle>
              <NewsContent>
                Olá turma, quero compartilhar com vocês que temos um novo projeto para trabalhar nas próximas semanas. Vamos trabalhar em equipe e fazer um ótimo trabalho juntos!
              </NewsContent>
              <hr />
              <NewsAuthor>Prof. João da Silva <span>Mar 10/12/2022</span></NewsAuthor>
            </NewsContainer>

            <NewsContainer>
              <NewsTitle>Alteração na grade das aulas</NewsTitle>
              <NewsContent>
                Atenção turma, houve uma alteração na grade de aulas desta semana. Por favor, verifiquem o novo cronograma na plataforma de ensino a distância. Qualquer dúvida, entrem em contato comigo ou com a coordenação.
              </NewsContent>
              <hr />
              <NewsAuthor>Prof. João da Silva <span>Mar 10/12/2022</span></NewsAuthor>
            </NewsContainer>
          </News>
        </Wrapper>
      </HomePage>
    </Layout>
  )
}

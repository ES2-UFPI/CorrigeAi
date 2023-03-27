import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { ButtonGreen } from '../../../components/ButtonGreen'

import { iClasses } from '../../ViewClasses'

import { 
  ButtonsClass,
  HomeClassContainer,
  News,
  NewsAuthor,
  NewsContainer,
  NewsContent,
  NewsTitle 
} from './styles'
import { Wrapper } from '../../../styles/Layout'
import { Layout } from '../../../components/Layout'

export function HomeclassTeacher() {
  const { state } = useLocation()
  const [_class, _setClass] = useState({} as iClasses)

  useEffect(() => {
    _setClass(state)
  }, [])

  return (
    <Layout>
      <HomeClassContainer>
        <Wrapper>
          <h1>Pagina principal Turma - teacher</h1>
          <h2>{_class.className}</h2>
          {/* Exibir participantes da turma*/}
          <p>
            <strong>Ementa: </strong>
            {_class.classSummary}
          </p>
          
          <ButtonsClass>
            <ButtonGreen>
              Criar Prova/Tarefas
            </ButtonGreen>
            <ButtonGreen>
              Provas cadastradas
            </ButtonGreen>
            <ButtonGreen>
              Tarefas cadastradas
            </ButtonGreen>
            <ButtonGreen>
              Cadastrar novo participante
            </ButtonGreen>
            <ButtonGreen>
              Ver participantes
            </ButtonGreen>
          </ButtonsClass>

          <h2>Notícias principais</h2>
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
      </HomeClassContainer>
    </Layout>
  )
}

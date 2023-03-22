import { useState } from 'react'

//Components da aplicação
import { FormAvaliation } from '../../components/FormAvaliation'
import { Layout } from '../../components/Layout'
import { ContextQuestionsProvider } from '../../context/contextQuestions'
import { Wrapper } from '../../styles/Layout'

//Components de estilização
import { CreateTaskOrExamStyled } from './styles'

export function CreateTaskOrExam() {
  const [selectValue, setSelectValue] = useState('none')

  const list = [
    { id: 'none', name: 'Nenhuma' },
    { id: 'exam', name: 'Prova' },
    { id: 'task', name: 'Tarefa' }
  ]

  return (
    <Layout>
      <ContextQuestionsProvider>
        <CreateTaskOrExamStyled className="TaskOrExam">
          <Wrapper>
            <label htmlFor="avaliation">Escolha a avaliação: </label>
            <select
              name="avaliation"
              id="avaliation"
              value={selectValue}
              onChange={e => setSelectValue(e.target.value)}
            >
              {list.map((avaliation, i) => (
                <option key={i} value={avaliation.id}>
                  {avaliation.name}
                </option>
              ))}
            </select>
            {/* Dependendo da escolha, vai gerar um formulario diferente */}
            {
              selectValue !== 'none' ?
                <FormAvaliation
                  typeAvaliation={selectValue}
                />
                :
                <h2>Escolha uma opção</h2>
            }
          </Wrapper>
        </CreateTaskOrExamStyled>
      </ContextQuestionsProvider>
    </Layout>
  )
}

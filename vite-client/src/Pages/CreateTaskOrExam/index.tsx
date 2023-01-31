import { useState } from 'react'

//Components da aplicação
import { FormAvaliation } from '../../components/FormAvaliation'

//Components de estilização
import { Wrapper } from '../../styles/Layout'
import { CreateTaskOrExamStyled } from './styles'

export function CreateTaskOrExam() {
  const [selectValue, setSelectValue] = useState('')
  
  const list = [
    { id: 'empty', name: 'Nenhuma' },
    { id: 'exam', name: 'Prova' },
    { id: 'task', name: 'Tarefa' }
  ]

  return (
    <Wrapper className="Wrapper">
      <CreateTaskOrExamStyled className="TaskOrExam">
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
          selectValue !== 'empty' ? 
            <FormAvaliation 
              typeAvaliation={selectValue}
            /> 
            : 
            <h2>Escolha uma opção</h2>
        }
      </CreateTaskOrExamStyled>
    </Wrapper>
  )
}

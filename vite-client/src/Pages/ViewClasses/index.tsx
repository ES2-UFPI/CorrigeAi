import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonGreen } from '../../components/ButtonGreen'
import { Layout } from '../../components/Layout'

import { Wrapper } from '../../styles/Layout'
import { ButtonAccessClass, ButtonCreateClass, Class, Classes, ContainerClasses } from './styles'

export interface iClasses {
  _id: string
  className: string
  classSummary: string
}

export function ViewClasses() {
  const [classes, setClasses] = useState<iClasses[]>([])

  useEffect(() => {
    const fetchForms = async () => {
      const response = await fetch('http://localhost:3000/getClasses')
      const data = await response.json()
      console.log(data.classes)
      setClasses(data.classes)
    }
    fetchForms()
    console.log(classes)
  }, [])

  return (
    <Layout>
      <Classes>
        <Wrapper>
          <h1>Ver turmas</h1>
          {classes.length > 0 ? (
            <ContainerClasses>
              {classes.map((_class, index) => {
                return (
                  <Class className="Class" key={index}>
                    <strong>{_class.className}</strong>
                    <div>
                      <hr />
                      <p>
                        <strong>Ementa:</strong> {_class.classSummary}
                      </p>
                      <hr />
                    </div>
                    <Link to="/home-class" state={_class}>
                      <ButtonAccessClass>Acessar turma</ButtonAccessClass>
                    </Link>
                  </Class>
                )
              })}
            </ContainerClasses>
          ) : (
            <ContainerClasses>
              <Class>
                <strong>Não existe turmas cadastradas!</strong>
              </Class>
              
              <Link to="/create-class">
                <ButtonCreateClass>
                  Criar Turma
                </ButtonCreateClass>
              </Link>
            </ContainerClasses>
          )}
        </Wrapper>
      </Classes>
    </Layout>
  )
}

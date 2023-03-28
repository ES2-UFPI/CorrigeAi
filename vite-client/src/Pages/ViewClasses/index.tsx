import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonGreen } from '../../components/ButtonGreen'
import { Layout } from '../../components/Layout'
import { ITeacher, IStudent, AuthContext } from '../../context/AuthContext'

import { Wrapper } from '../../styles/Layout'
import { ButtonAccessClass, ButtonCreateClass, Class, Classes, ContainerClasses } from './styles'

export interface iClasses {
  _id: string
  className: string
  classSummary: string
  professor: ITeacher
  students: IStudent []
}

export function ViewClasses() {
  const [classes, setClasses] = useState<iClasses[]>([])
  const { user } = useContext(AuthContext)

  useEffect(() => {
    const fetchForms = async () => {
      if (user?.professor){
        console.log('professor')
        const response = await fetch(`http://localhost:3000/getProfessorClasses/${user?.professor?._id}`)
        const data = await response.json()

        setClasses(data.findClasses)
      }
    }
    fetchForms()
  }, [user])

  useEffect(() => {
    const fetchForms = async () => {
      if (user?.student){
        console.log('aluno')
        const response = await fetch(`http://localhost:3000/getStudentClasses/${user?.student?._id}`)
        const data = await response.json()

        setClasses(data)
      }
    }
    fetchForms()
  }, [user])

  console.log(classes, '43')
  return (
    <Layout>
      <Classes>
        <Wrapper>
          <h1>Ver turmas</h1>
          {classes ? (
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
                      <ButtonAccessClass>
                        Acessar turma
                      </ButtonAccessClass>
                    </Link>
                    <Link to="/participants" state={_class}>
                      <ButtonAccessClass>
                        Ver participantes
                      </ButtonAccessClass>
                    </Link>
                  </Class>
                )
              })}
            </ContainerClasses>
          ) : (
            <ContainerClasses>
              <Class>
                <strong>Não existe turmas!</strong>
              </Class>
              
              {
                user?.professor ? (
                  <Link to="/create-class">
                    <ButtonCreateClass>
                      Criar Turma
                    </ButtonCreateClass>
                  </Link>
                ): null
              }
            </ContainerClasses>
          )}
        </Wrapper>
      </Classes>
    </Layout>
  )
}

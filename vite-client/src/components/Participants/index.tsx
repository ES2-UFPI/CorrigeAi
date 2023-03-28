import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext, IStudent } from "../../context/AuthContext";
import { iClasses } from "../../Pages/ViewClasses";
import { ProfilePicture } from "../../Pages/ViewPerfilUser/styles";
import { Wrapper } from "../../styles/Layout";
import { Layout } from "../Layout";
import { InfoUser, Participant, ParticipantsContainer } from "./styles";

export function Participants() {
  const { state } = useLocation()
  const [_class, _setClass] = useState({} as iClasses)

  const [students, setStudents] = useState<IStudent[]>([])
  useEffect(() => {
    _setClass(state)
    setStudents(state.students)
  }, [])
  
  return (
    <Layout>
      <Wrapper>
        <ParticipantsContainer>
          <h1>Participantes da turma</h1>
          <div className="participants">
            {students.map( (participant, index) => (
              <Participant key={index}>
              <ProfilePicture
                  src='https://source.unsplash.com/random/150x150'
                  alt='Foto perfil'
                />
                <InfoUser>
                  <p><strong>Name: </strong>{participant.name}</p>
                  <p><strong>Email: </strong>{participant.email}</p>
                </InfoUser>
              </Participant>
            ))}
        </div>
        </ParticipantsContainer>
      </Wrapper>
    </Layout>
  )
}

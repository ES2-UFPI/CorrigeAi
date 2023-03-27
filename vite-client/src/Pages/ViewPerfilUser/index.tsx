import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import {
  InfoUser,
  ProfileBio,
  ProfileContainer,
  ProfileDetails,
  ProfilePicture,
} from './styles'

// import userImage from '../../assets/profile-image.png'
import { Wrapper } from '../../styles/Layout'
import { Layout } from '../../components/Layout'
import { ButtonGreen } from '../../components/ButtonGreen'

export function ViewPerfilUser() {
  const { user } = useContext(AuthContext)

  let usingUser = null
  if (user?.professor) {
    usingUser = {
      name: user.professor.name,
      age: 20,
      email: user.professor.email,
      role: 'Professor',
      address: 'Avenida das Flores, 456',
      city: 'São Paulo',
      state: 'SP',
      profilePicture: 'https://source.unsplash.com/random/150x150',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae elit gravida, ullamcorper elit sit amet, vestibulum nisi. Sed tincidunt ac sapien vel molestie. Pellentesque quis tempor ante, in consectetur mauris. Nulla viverra consequat neque, euismod fermentum lectus malesuada id.'
    }
  } else if (user?.student) {
    usingUser = {
      name: user?.student.name,
      age: 20,
      email: user?.student.email,
      role: 'Estudante',
      address: 'Rua dos Estudantes, 123',
      city: 'Rio de Janeiro',
      state: 'RJ',
      profilePicture: 'https://source.unsplash.com/random/150x150',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae elit gravida, ullamcorper elit sit amet, vestibulum nisi. Sed tincidunt ac sapien vel molestie. Pellentesque quis tempor ante, in consectetur mauris. Nulla viverra consequat neque, euismod fermentum lectus malesuada id.'
    }
  }

  return (
    <Layout>
      <ProfileContainer>
        <Wrapper className='Wrapper'>
          <h1>Perfil {usingUser?.role}</h1>
          <InfoUser>
            <div>
              <ProfilePicture
                src={usingUser?.profilePicture}
                alt='Foto perfil'
                />
              <p>{usingUser?.name}</p>
            </div>

            <ButtonGreen>
              Alterar user
            </ButtonGreen>
          </InfoUser>
          
          <ProfileDetails>
            <h2>Detalhes</h2>
            <p><strong>idade: </strong>{usingUser?.age}</p>
            <p><strong>Email: </strong>{usingUser?.email}</p>
            <p><strong>Telefone:</strong> (21) 9876-5432</p>
            <p><strong>Papel: </strong>{usingUser?.role}</p>
            <p><strong>Cidade: </strong>{usingUser?.city}</p>
            <p><strong>Estado: </strong>{usingUser?.state}</p>
            <ButtonGreen>
              Editar
            </ButtonGreen>
          </ProfileDetails>
          <ProfileBio>
            <h2>Bio</h2>
            <p>{usingUser?.bio}</p>
            <ButtonGreen>
              Editar
            </ButtonGreen>
          </ProfileBio>
        </Wrapper>
      </ProfileContainer>
    </Layout>
  )
}

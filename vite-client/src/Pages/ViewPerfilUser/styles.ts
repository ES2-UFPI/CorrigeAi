import styled from "styled-components";

export const ProfileContainer = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  h1 {
    margin-bottom: 1rem;
  }

  h2 {
    color: var(--primary);
    margin-bottom: 1rem;
  }
`;

export const InfoUser = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  border-radius: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  color: var(--primary);
  background: var(--about);
  
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  button {
    margin: 0;
  }
`

export const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  object-fit: cover;
`;

export const ProfileDetails = styled.div`
  width: 100%;
  padding: 1rem 2rem 2rem;
  border-radius: 2rem;

  background: var(--about);
  p {
    margin-bottom: 1rem;
  }
`;

export const ProfileBio = styled.p`
  margin: 1rem;
  width: 100%;
  line-height: 1.5;

  border-radius: 2rem;
  padding: 1rem 2rem 2rem;
  background: var(--about);
  
  p {
    margin-bottom: 1rem;
  }
`;

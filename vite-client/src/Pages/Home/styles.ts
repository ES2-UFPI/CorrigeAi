import styled from "styled-components";
import { ContainerButtonGreen } from "../../components/ButtonGreen/styles";

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 10rem;
  height: 100%;
  min-height: 100vh;

  label {
    margin-bottom: .5rem;
  }

  input {
    padding: 8px;
    margin-bottom: 1rem;
    border: none;
    border-radius: .8rem;
  }
  background-color: var(--secondary)
`;

export const Form = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-top: 2rem;
  background-color: var(--about);
  padding: 3rem 3rem 5rem;
  border-radius: .8rem;

  h1 {
    margin-bottom: 2rem;
  }
`

export const LoginForm = styled.div `
  display: flex;
  flex-direction: column;
  width: 30rem;
`

export const StyledButton = styled(ContainerButtonGreen)`
  padding: 1rem;
  margin-top: 1rem;
  border: none;
  border-radius: .8rem;
  cursor: pointer;

  background-color: #76DC28;
  color: white;
  text-shadow: 1px 1px 1px black;

  &:hover {
    background-color: #53991e;
  }
`;
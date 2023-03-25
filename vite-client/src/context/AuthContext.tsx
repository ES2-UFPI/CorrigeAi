import { createContext } from "react";

export interface IUser {
  name: string
  typeUser: string
  email: string
}

export interface ITeacher {
  _id: string;
  name: string;
  password: string;
  email: string;
  user: string;
}

export interface IStudent {
  _id: string;
  name: string;
  password: string;
  email: string;
  user: string;
}

interface AuthContextData {
  user: IUser | null
  // Teacher: ITeacher | null
  // setTeacher: React.Dispatch<React.SetStateAction<ITeacher | null>>
  // Student: IStudent | null
  // setStudent: React.Dispatch<React.SetStateAction<IStudent | null>>
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
  signed: boolean
  setSigned: React.Dispatch<React.SetStateAction<boolean>>
  signIn(email: string) : Promise<boolean>
  signOut(): void,
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)


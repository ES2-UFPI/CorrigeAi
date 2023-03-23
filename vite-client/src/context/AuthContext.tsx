import { createContext } from "react";

export interface IUser {
  name: string
  typeUser: string
  email: string
}

interface AuthContextData {
  user: IUser | null
  signed: boolean
  signIn: () => void
  signOut: () => void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)


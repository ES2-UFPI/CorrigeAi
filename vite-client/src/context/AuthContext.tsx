import { createContext } from "react";

export interface IUser {
  name: string
  typeUser: string
  email: string
}

interface AuthContextData {
  user: IUser | null
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
  signed: boolean
  setSigned: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)


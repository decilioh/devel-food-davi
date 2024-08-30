import { createContext, useState } from "react";

type UserData = {
    email: string | undefined
    password: string | undefined
}

export interface IUserContextFunctions{
    email: string | undefined,
    password: string | undefined,
    user: UserData | undefined,
    setUser: React.Dispatch<React.SetStateAction<UserData | undefined>>
    setEmail: React.Dispatch<React.SetStateAction<string | undefined>>,
    setPassword: React.Dispatch<React.SetStateAction<string | undefined>>,
}
export const UserContext = createContext<IUserContextFunctions|undefined>(undefined)

interface IUserProvider{
    children: React.ReactNode
}

export const UserProvider = ({children}: IUserProvider) => {
    const [email, setEmail] = useState<string | undefined>(undefined)
    const [password, setPassword] = useState<string | undefined>(undefined)
    const [user, setUser] = useState<UserData | undefined>(undefined)

    return (
        <UserContext.Provider value={{email, password, setEmail, setPassword, user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
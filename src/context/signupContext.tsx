import { createContext, ReactNode, useState } from "react"

type Adress = {
    addressLabel: string
    postalCode: string
    street: string
    neighborhood: string
    city: string
    number: string
    state: string
}

export interface IUser {
    name: string
    email: string
    password: string
    cnpj: string
    phoneNumber: string
    foodType: string
    url: string
    restaurantAddress: Adress
}


export interface signupProps{
    user: IUser | undefined
    setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>
}

interface ModalProviderProps {
    children: ReactNode;
}


export const SignupContext = createContext<signupProps | null>(null)


export function SignupProvider({children}: ModalProviderProps){
    const [user, setUser] = useState<IUser | undefined>()

    return(
        <SignupContext.Provider value={{user, setUser}}>
            {children}
        </SignupContext.Provider>
    )
}
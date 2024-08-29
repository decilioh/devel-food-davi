import { createContext, ReactNode, useState } from "react"

export interface ModalContextProps{
    isOpen: boolean
    openModal: () => void
    closeModal: () => void
}

interface ModalProviderProps {
    children: ReactNode;
}

export const ModalContext = createContext<ModalContextProps | null>(null)


export function ModalProvider({children}: ModalProviderProps){
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return(
        <ModalContext.Provider value={{isOpen, openModal, closeModal}}>
            {children}
        </ModalContext.Provider>
    )
}
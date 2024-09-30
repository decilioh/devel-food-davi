import { createContext, ReactNode, useState } from "react"

export interface ModalContextProps{
    isOpen: boolean
    openModal: () => void
    closeModal: () => void
    setConfirmAction: (action?: () => void) => void; // Função para definir a ação de confirmação
    confirmAction?: () => void
}

interface ModalProviderProps {
    children: ReactNode;
}

export const ModalContext = createContext<ModalContextProps | null>(null)


export function ModalProvider({children}: ModalProviderProps){
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [onConfirm, setOnConfirm] = useState<(() => void) | undefined>();


    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const confirmAction = () => {
        if (onConfirm) {
            onConfirm(); // Só executa se existir uma função de confirmação
        }
        closeModal();
    };

    const setConfirmAction = (action?: () => void) => {
        setOnConfirm(() => action); // Define a função de confirmação dinamicamente
    };

    return(
        <ModalContext.Provider value={{isOpen, openModal, closeModal, setConfirmAction, confirmAction }}>
            {children}
        </ModalContext.Provider>
    )
}
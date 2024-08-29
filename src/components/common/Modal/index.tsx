import React, { useContext } from 'react'
import { ButtonAction, Centralize, ModalDialog, Overlay, Paragraph, SpacingContents } from './Modal.styles'
import { ModalContext } from '../../../context/modalContext'

const Modal = () => {
    const modalContext = useContext(ModalContext)

    if(!modalContext?.isOpen){
        return null
    }

    return (
        <Overlay>
            <Centralize>
                <ModalDialog>
                    <Paragraph>Você tem certeza que deseja realizar esta ação?</Paragraph>
                    <SpacingContents>
                        <ButtonAction onClick={modalContext.closeModal} style={{ backgroundColor: '#00D982' }} >Sim</ButtonAction>
                        <ButtonAction onClick={modalContext.closeModal} style={{ backgroundColor: '#C90000' }}>Não</ButtonAction>
                    </SpacingContents>
                </ModalDialog>
            </Centralize>
        </Overlay>
    )
}

export default Modal
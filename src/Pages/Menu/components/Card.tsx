import React, { useContext } from 'react'
import FotoExemplo from "../../../assets/images/fotoPratoExemplo.png"
import { ButtonContainer, IconButton, ImageCard, ImageContainer, SectionMenuOptionsCard } from '../Menu.styles'
import { LuPencilLine } from 'react-icons/lu'
import { IoTrashSharp } from 'react-icons/io5'
import { ModalContext, ModalContextProps } from '../../../context/modalContext'

interface Props{
    nome: string
}

const Card = ({nome}: Props) => {
    const {openModal} = useContext(ModalContext) as ModalContextProps

    return (
        <SectionMenuOptionsCard>
            <ImageContainer>
                <ImageCard src={FotoExemplo} />
                <ButtonContainer>
                    <IconButton color="#006307">
                        <LuPencilLine />
                    </IconButton>
                    <IconButton color="#b70000" onClick={openModal}>
                        <IoTrashSharp />
                    </IconButton>
                </ButtonContainer>
            </ImageContainer>
            <p>{nome}</p>

        </SectionMenuOptionsCard>
    )
}

export default Card
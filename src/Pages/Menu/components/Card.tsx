import React, { useContext } from 'react'
import FotoExemplo from "../../../assets/images/fotoPratoExemplo.png"
import { ButtonContainer, IconButton, ImageCard, ImageContainer, SectionMenuOptionsCard } from '../Menu.styles'
import { LuPencilLine } from 'react-icons/lu'
import { IoTrashSharp } from 'react-icons/io5'
import { ModalContext, ModalContextProps } from '../../../context/modalContext'
import { deleteDish } from '../../../services/dish/deleteDish'
import { useNavigate } from 'react-router-dom'

interface Props{
    nome: string;
    img: string;
    id: string | undefined;
    token: string;
    onDelete: (id: string | undefined) => void; // Adiciona uma prop para o callback
}

const Card = ({nome, img, id, token, onDelete }: Props) => {
    const {openModal, setConfirmActionPromisse} = useContext(ModalContext) as ModalContextProps
    const navigate = useNavigate()

    const handleDeleteClick = () => {
        setConfirmActionPromisse(async () => {
            await deleteDish(id, token)
            onDelete(id)
        });
        openModal();
    };

    return (
        <SectionMenuOptionsCard>
            <ImageContainer>
                <ImageCard src={img} />
                <ButtonContainer>
                    <IconButton color="#006307" onClick={() => navigate(`novo-prato/${id}`)}>
                        <LuPencilLine />
                    </IconButton>
                    <IconButton color="#b70000" onClick={handleDeleteClick}>
                        <IoTrashSharp />
                    </IconButton>
                </ButtonContainer>
            </ImageContainer>
            <p>{nome}</p>
        </SectionMenuOptionsCard>
    )
}

export default Card
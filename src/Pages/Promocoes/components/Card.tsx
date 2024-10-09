import React, { useContext } from 'react'
import FotoExemplo from "../../../assets/images/promotion.png"
import { ButtonContainer, IconButton, ImageCard, ImageContainer, SectionMenuOptionsCard } from '../Promotions.styles'
import { LuPencilLine } from 'react-icons/lu'
import { IoTrashSharp } from 'react-icons/io5'
import { ModalContext, ModalContextProps } from '../../../context/modalContext'
import { useNavigate } from 'react-router-dom'
import { deletePromotion } from '../../../services/promotions/deletePromotion'

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
            await deletePromotion(token, id)
            onDelete(id)
        });
        openModal();
    };

    return (
        <SectionMenuOptionsCard>
            <ImageContainer>
                <ImageCard src={img} />
                <ButtonContainer>
                    <IconButton color="#006307" onClick={() => navigate(`nova-promocao/${id}`)}>
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
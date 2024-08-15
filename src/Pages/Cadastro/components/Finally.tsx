import React from 'react'
import Sucesso from "../../../assets/images/sucess.png"
import Error from "../../../assets/images/error.png"
import { Paragraph } from '../Cadastro.styles'
import Button from '../../../components/common/Button'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

interface Props{
    sucessOrError: boolean
    setvalue: React.Dispatch<React.SetStateAction<number>>
}

export const ImageFinally = styled.img`
    width: auto;
`

const Finally = ({sucessOrError, setvalue}: Props) => {
    const navigate = useNavigate()
    const sucess = [Sucesso, "Cadastro finalizado!", "Parabéns! Agora você pode aproveitar nossas ofertas e serviços e economizar com super cupons Develfood."]
    const error = [Error, "Algo deu errado!", "Um erro ocorreu, contate o administrador do site ou tente novamente!"]

    const handleContinue = () => {
        if(sucessOrError){
            navigate("/login")
            return
        }
        setvalue(1)
    }

    return (
        <>
            <ImageFinally src={sucessOrError ? sucess[0] : error[0]}/>
            <Paragraph>{sucessOrError ? sucess[1] : error[1]}</Paragraph>
            <Paragraph style={{marginBottom: "5vh"}}>{sucessOrError ? sucess[2] : error[2]}</Paragraph>
            <Button id='button-register' onClick={handleContinue}>Continuar</Button>
        </>
    )
}

export default Finally
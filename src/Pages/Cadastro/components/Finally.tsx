import React from 'react'
import Sucesso from "../../../assets/images/sucess.png"
import Error from "../../../assets/images/error.png"
import { Paragraph } from '../Cadastro.styles'
import Button from '../../../components/common/Button'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

interface Props{
    value: number
    setvalue: React.Dispatch<React.SetStateAction<number>>
}

export const ImageFinally = styled.img`
    width: 97px;
`

const Finally = ({value, setvalue}: Props) => {
    const navigate = useNavigate()
    const sucess = [Sucesso, "Cadastro finalizado!", "Parabéns! Agora você pode aproveitar nossas ofertas e serviços e economizar com super cupons Develfood."]
    const error = [Error, "Algo deu errado!", "Um erro ocorreu, contate o administrador do site ou tente novamente!"]

    const handleContinue = () => {
        if(value == 5){
            setvalue(1)
        }
        return navigate("/login")
    }

    return (
        <>
            <ImageFinally src={value == 4 ? sucess[0] : error[0]} id='id-image-sucess-or-error' style={{marginTop: "55px"}}/>
            <Paragraph id='paragraph-1' >{value == 4 ? sucess[1] : error[1]}</Paragraph>
            <Paragraph id='paragraph-2' style={{marginBottom: "100px"}}>{value == 4 ? sucess[2] : error[2]}</Paragraph>
            <Button id='button-continue-final' onClick={handleContinue} >Continuar</Button>
        </>
    )
}

export default Finally
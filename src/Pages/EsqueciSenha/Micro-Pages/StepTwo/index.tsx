import React, { useContext } from 'react'
import Button from '../../../../components/common/Button'
import Verified from "../../../../assets/images/verified.png"
import { NoticeVerified, TitleOrCodeVerified, VerifiedLogo } from '../../EsqueciSenha.styles'
import { FormValidation } from '../../components/Form.styles'
import { ThemeContext } from '../../../../context/themeContext'

interface Props {
    value: React.Dispatch<React.SetStateAction<number>>
}

const StepTwo = ({ value }: Props) => {
    const theme = useContext(ThemeContext)
    function changeScene() {
        value(3)
    }

    return (
        <>
            <FormValidation onSubmit={changeScene} id='form'>
                <VerifiedLogo src={Verified} id="image-logo" />
                <TitleOrCodeVerified>Código de validação</TitleOrCodeVerified>
                <NoticeVerified style={{color: `${theme?.theme == "light" ? "#A2A2A2" : "white"}`}}>Copie ou anote este código, ele será utilizado para você finalizar a recuperação de senha!</NoticeVerified>
                <TitleOrCodeVerified>AUIhuiaasa56d4as56-AUIhuiaasa56d4as56 56das465fa4d56-5fsd4fgsd65f4sa</TitleOrCodeVerified>
                <Button id="button-forgot-password-2-continue" type="submit">Continuar</Button>
            </FormValidation>
        </>
    )
}

export default StepTwo
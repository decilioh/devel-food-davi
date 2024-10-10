import React, { useContext } from 'react'
import Button from '../../../../components/common/Button'
import Verified from "../../../../assets/images/verified.png"
import { NoticeVerified, TitleOrCodeVerified, VerifiedLogo } from '../../EsqueciSenha.styles'
import { FormValidation, SpacingContents } from '../../components/Form.styles'
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
                <NoticeVerified style={{ color: `${theme?.theme == "light" ? "#A2A2A2" : "white"}` }}>Foi enviado um código para você no seu email, anote-o e use na próxima tela!</NoticeVerified>
                <SpacingContents style={{marginTop: "3.5rem"}}>
                    <Button id="button-forget-password" onClick={() => value(1)}>
                        Voltar
                    </Button>
                    <Button id="button-forget-password-conclude" type="submit">
                        Continuar
                    </Button>
                </SpacingContents>
            </FormValidation>
        </>
    )
}

export default StepTwo
import React from 'react'
import Button from '../../../../components/common/Button'
import Verified from "../../../../assets/images/verified.png"
import { NoticeVerified, TitleOrCodeVerified, VerifiedLogo } from '../../EsqueciSenha.styles'
import { FormValidation } from '../../components/Form.styles'

interface Props {
    valor: React.Dispatch<React.SetStateAction<number>>
}

const StepTwo = ({ valor }: Props) => {
    function changeScene() {
        valor(3)
    }

    return (
        <>
            <FormValidation onSubmit={changeScene}>
                <VerifiedLogo src={Verified} />
                <TitleOrCodeVerified>Código de validação</TitleOrCodeVerified>
                <NoticeVerified>Copie ou anote este código, ele será utilizado para você finalizar a recuperação de senha!</NoticeVerified>
                <TitleOrCodeVerified>AUIhuiaasa56d4as56-AUIhuiaasa56d4as56 56das465fa4d56-5fsd4fgsd65f4sa</TitleOrCodeVerified>
                <Button id="button-esqueci-senha-2-continuar" type="submit">Continuar</Button>
            </FormValidation>
        </>
    )
}

export default StepTwo
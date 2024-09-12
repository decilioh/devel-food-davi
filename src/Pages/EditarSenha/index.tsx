import React, { useContext } from 'react'
import { ImageLogo, MainContainer } from '../EsqueciSenha/EsqueciSenha.styles'
import ImgLogoWhite from "../../assets/images/logoDevelThemeWhite.svg"
import ImgLogoBlack from "../../assets/images/logoDevelThemeBlack.svg"
import { ThemeContext } from '../../context/themeContext'
import { useNavigate } from 'react-router-dom'
import { FormData, schema } from './schema'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import PasswordInput from '../../components/common/PasswordInput'
import { FormForgotPassword, SpacingContentsStepThree } from '../EsqueciSenha/components/Form.styles'
import { MdLockOpen } from 'react-icons/md'
import Button from '../../components/common/Button'

const EditPassword = () => {
    const theme = useContext(ThemeContext)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields }
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data)
        navigate(-1)
    };

    return (
        <MainContainer>
            <ImageLogo src={theme?.theme === "light" ? ImgLogoWhite : ImgLogoBlack} id="image-logo" />
            <FormForgotPassword onSubmit={handleSubmit(onSubmit)} noValidate id='form-forgot-password'>
                <PasswordInput
                    id="input-validation"
                    icon={MdLockOpen}
                    placeholder="Senha atual"
                    {...register("oldPassword")}
                    error={errors.oldPassword}
                    isTouched={touchedFields.oldPassword}
                />
                <PasswordInput
                    id="input-password"
                    icon={MdLockOpen}
                    placeholder="Nova senha"
                    {...register("password")}
                    error={errors.password}
                    isTouched={touchedFields.password}
                />
                <PasswordInput
                    id="input-confirm-password"
                    icon={MdLockOpen}
                    placeholder="Confirmar senha"
                    {...register("confirmPassword")}
                    error={errors.confirmPassword}
                    isTouched={touchedFields.confirmPassword}
                />
                <SpacingContentsStepThree>
                    <Button id="button-return-page" onClick={() => navigate(-1)}>
                        Voltar
                    </Button>
                    <Button id="button-submit" type="submit">
                        Concluir
                    </Button>
                </SpacingContentsStepThree>
            </FormForgotPassword>
        </MainContainer>
    )
}

export default EditPassword
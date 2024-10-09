import React, { useContext, useState } from 'react'
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
import { Helmet } from 'react-helmet-async'
import { jwtDecode } from "jwt-decode";
import { AuthContext, IAuthContextFunctions } from '../../context/authContext'
import { getRestaurantById, IRestaurantGet } from '../../services/restaurant/getRestaurant'
import Loader from '../../components/common/Loader'
import { changePasswordRestaurant } from '../../services/restaurant/changePassword'
import { toast } from 'react-toastify'
import { encryptPassword } from '../../utils'


const EditPassword = () => {
    const theme = useContext(ThemeContext)
    const {token, signOutCookies} = useContext(AuthContext) as IAuthContextFunctions
    const navigate = useNavigate() 
    const [isLoading, setIsLoading] = useState(false)


    if(!token) return null

    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields }
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const onSubmit: SubmitHandler<FormData> = async(data) => {
        setIsLoading(true)
        const decoded = jwtDecode(token)
        if(!decoded.sub) return null

        const newPassword = await encryptPassword(data.password)
        const oldPassword = await encryptPassword(data.oldPassword)

        try {
            const dataRestaurant: IRestaurantGet = await getRestaurantById(token, decoded.sub.toString())
            await changePasswordRestaurant(token, {
                email: dataRestaurant.email,
                oldPassword: data.oldPassword,
                newPassword: data.password,
                confirmNewPassword: data.confirmPassword
            })
            setIsLoading(false)
            signOutCookies()
            navigate("/login")
            toast.success("Senha alterada com sucesso")
        } catch (error) {
            setIsLoading(false)
            toast.error("Ocorreu um erro ao alterar a senha!")
            navigate(-1)
            
        }
    };

    if(isLoading){
        return <Loader theme={theme}/>; // ou qualquer outro componente de loading
    }

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
            <Helmet title="Trocar senha" />
        </MainContainer>
    )
}

export default EditPassword
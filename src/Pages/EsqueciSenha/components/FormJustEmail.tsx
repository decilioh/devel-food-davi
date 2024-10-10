import React, { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDataSchema, schemaJustEmail } from '../schema'
import Input from '../../../components/common/Input';
import Button from '../../../components/common/Button';
import { FormForgotPassword, FormForgotPasswordEmail, SpacingContents } from './Form.styles';
import { MdOutlineEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ThemeContext } from '../../../context/themeContext';
import Loader from '../../../components/common/Loader';
import { sendValidationCodeRestaurant } from '../../../services/restaurant/sendValidationCode';

interface Props {
    value: React.Dispatch<React.SetStateAction<number>>
    setEmail:  React.Dispatch<React.SetStateAction<string>>
}


const FormJustEmail = ({ value, setEmail }: Props) => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const theme = useContext(ThemeContext)
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields }
    } = useForm<FormDataSchema>({
        resolver: zodResolver(schemaJustEmail)
    })

    const onSubmit: SubmitHandler<FormDataSchema> = async(data) => {
        try {
            setIsLoading(true)
            await sendValidationCodeRestaurant(data.email)
            setEmail(data.email)
            setIsLoading(false)
            value(2)
        } catch (error) {
            setIsLoading(false)
            toast.error("Ocorreu um erro!")
            navigate(-1)
        }
        console.log(data);
    };

    if(isLoading) {
        return <Loader theme={theme}/>
    }

    return (
        <FormForgotPasswordEmail onSubmit={handleSubmit(onSubmit)} noValidate id='form-email'>
            <Input
                id='input-email'
                icon={MdOutlineEmail}
                placeholder='E-mail'
                {...register('email')}
                error={errors.email}
                isTouched={touchedFields.email}
            />
            <SpacingContents>
                <Button id="button-return-page" onClick={() => navigate("/login")}>
                    Voltar
                </Button>
                <Button id="button-submit" type="submit">
                    Continuar
                </Button>
            </SpacingContents>
        </FormForgotPasswordEmail>

    )
}

export default FormJustEmail
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDataSchema, schemaJustEmail } from '../schema'
import Input from '../../../components/common/Input';
import Button from '../../../components/common/Button';
import { FormForgotPassword, FormForgotPasswordEmail, SpacingContents } from './Form.styles';
import { MdOutlineEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

interface Props {
    value: React.Dispatch<React.SetStateAction<number>>
}


const FormJustEmail = ({ value }: Props) => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields }
    } = useForm<FormDataSchema>({
        resolver: zodResolver(schemaJustEmail)
    })

    const onSubmit: SubmitHandler<FormDataSchema> = (data) => {
        value(2)
        console.log(data);
    };

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
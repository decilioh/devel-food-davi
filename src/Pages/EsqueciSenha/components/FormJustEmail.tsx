import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDataSchema, schemaJustEmail } from '../schema'
import Input from '../../../components/common/Input';
import { AiOutlineMail } from 'react-icons/ai';
import Button from '../../../components/common/Button';
import { FormForgotPassword, FormForgotPasswordEmail } from './Form.styles';
import { MdOutlineEmail } from 'react-icons/md';

interface Props{
    value: React.Dispatch<React.SetStateAction<number>>
}


const FormJustEmail = ({value}: Props) => {
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
                placeholder='Email'
                {...register('email')}
                error={errors.email}
                isTouched={touchedFields.email}
            />
            <Button id='button-forgot-password' type='submit'>Continuar</Button>
        </FormForgotPasswordEmail>

    )
}

export default FormJustEmail
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDataSchema, schemaJustEmail } from '../schema'
import Input from '../../../components/common/Input';
import { AiOutlineMail } from 'react-icons/ai';
import Button from '../../../components/common/Button';
import { FormEsqueciSenha } from './Form.styles';

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
        <FormEsqueciSenha onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input
                id='input-login-email'
                icon={AiOutlineMail}
                placeholder='Email'
                {...register('email')}
                error={errors.email}
                isTouched={touchedFields.email}
            />
            <Button id='button-esqueci-senha-1-continuar' type='submit'>Continuar</Button>
        </FormEsqueciSenha>

    )
}

export default FormJustEmail
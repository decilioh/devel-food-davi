import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDataSchema, schema } from '../schema'
import Input from '../../../components/common/Input';
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai';
import PasswordInput from '../../../components/common/PasswordInput';
import Button from '../../../components/common/Button';
import { FormLogin } from './Form.styles';

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields }
    } = useForm<FormDataSchema>({
        resolver: zodResolver(schema)
    })

    const onSubmit: SubmitHandler<FormDataSchema> = (data) => {
        console.log(data);
    };

    return (
        <FormLogin onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input
                id='input-login-email'
                icon={AiOutlineMail}
                placeholder='Email'
                {...register('email')}
                error={errors.email}
                isTouched={touchedFields.email}
            />
            <PasswordInput
                id='input-login-senha'
                icon={AiOutlineLock}
                placeholder="Senha"
                {...register('password')}
                error={errors.password}
                isTouched={touchedFields.password}
            />
            <Button id='botao-login-submit' type='submit'>Logar</Button>
        </FormLogin>

    )
}

export default Form
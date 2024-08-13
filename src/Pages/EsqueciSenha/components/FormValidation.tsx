import React, { FormEvent } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDataSchemaValidation, schemaValidation } from '../schema'
import Input from '../../../components/common/Input';
import { AiOutlineLock } from 'react-icons/ai';
import Button from '../../../components/common/Button';
import { FormEsqueciSenha } from './Form.styles';
import PasswordInput from '../../../components/common/PasswordInput';
import { DivSeparacao } from '../EsqueciSenha.styles';
import { useNavigate } from 'react-router-dom';

interface Props {
    valor: React.Dispatch<React.SetStateAction<number>>
  }

const FormValidation = ({valor}: Props) => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields }
    } = useForm<FormDataSchemaValidation>({
        resolver: zodResolver(schemaValidation)
    })

    const onSubmit: SubmitHandler<FormDataSchemaValidation> = (data) => {
        console.log(data)
        navigate("/")
    };

    return (
        <FormEsqueciSenha onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input
                id='input-login-validacao'
                icon={AiOutlineLock}
                placeholder='Código de validação'
                {...register('validationCode')}
                error={errors.validationCode}
                isTouched={touchedFields.validationCode}
            />
            <PasswordInput
                id='input-login-senha'
                icon={AiOutlineLock}
                placeholder="Senha"
                {...register('password')}
                error={errors.password}
                isTouched={touchedFields.password}
            />
            <PasswordInput
                id='input-login-confirmar-senha'
                icon={AiOutlineLock}
                placeholder="Confirmar senha"
                {...register('confirmPassword')}
                error={errors.confirmPassword}
                isTouched={touchedFields.confirmPassword}
            />
            <DivSeparacao>
                <Button id='button-esqueci-senha-3-voltar' onClick={() => valor(2)}>Voltar</Button>
                <Button id='button-esqueci-senha-3-continuar' type='submit'>Continuar</Button>
            </DivSeparacao>
        </FormEsqueciSenha>

    )
}

export default FormValidation
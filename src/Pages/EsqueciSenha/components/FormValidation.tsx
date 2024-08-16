import React, { FormEvent } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDataSchemaValidation, schemaValidation } from '../schema'
import Input from '../../../components/common/Input';
import { AiOutlineLock } from 'react-icons/ai';
import Button from '../../../components/common/Button';
import PasswordInput from '../../../components/common/PasswordInput';
import { SpacingContents } from '../EsqueciSenha.styles';
import { useNavigate } from 'react-router-dom';
import { FormForgotPassword } from './Form.styles';

interface Props {
    value: React.Dispatch<React.SetStateAction<number>>
}

const FormValidation = ({value}: Props) => {
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
      <FormForgotPassword onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          id="input-login-validation"
          icon={AiOutlineLock}
          placeholder="Código de validação"
          {...register("validationCode")}
          error={errors.validationCode}
          isTouched={touchedFields.validationCode}
        />
        <PasswordInput
          id="input-login-password"
          icon={AiOutlineLock}
          placeholder="Senha"
          {...register("password")}
          error={errors.password}
          isTouched={touchedFields.password}
        />
        <PasswordInput
          id="input-login-confirm-password"
          icon={AiOutlineLock}
          placeholder="Confirmar senha"
          {...register("confirmPassword")}
          error={errors.confirmPassword}
          isTouched={touchedFields.confirmPassword}
        />
        <SpacingContents>
          <Button id="button-forget-password-3-back" onClick={() => value(2)}>
            Voltar
          </Button>
          <Button id="button-forget-password-3-continue" type="submit">
            Continuar
          </Button>
        </SpacingContents>
      </FormForgotPassword>
    );
}

export default FormValidation
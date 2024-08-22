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
import { MdLockOpen } from 'react-icons/md';

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
      <FormForgotPassword onSubmit={handleSubmit(onSubmit)} noValidate id='form-forgot-password'>
        <Input
          id="input-validation"
          icon={AiOutlineLock}
          placeholder="Código de validação"
          {...register("validationCode")}
          error={errors.validationCode}
          isTouched={touchedFields.validationCode}
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
        <SpacingContents>
          <Button id="button-forget-password" onClick={() => value(2)}>
            Voltar
          </Button>
          <Button id="button-forget-password-conclude" type="submit">
            Concluir
          </Button>
        </SpacingContents>
      </FormForgotPassword>
    );
}

export default FormValidation
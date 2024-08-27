import React, { FormEvent } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDataSchemaValidation, schemaValidation } from '../schema'
import Input from '../../../components/common/Input';
import Button from '../../../components/common/Button';
import PasswordInput from '../../../components/common/PasswordInput';
import { useNavigate } from 'react-router-dom';
import { FormForgotPassword, SpacingContents, SpacingContentsStepThree } from './Form.styles';
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
          icon={MdLockOpen}
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
        <SpacingContentsStepThree>
          <Button id="button-return-page" onClick={() => value(2)}>
            Voltar
          </Button>
          <Button id="button-submit" type="submit">
            Concluir
          </Button> 
        </SpacingContentsStepThree>
      </FormForgotPassword>
    );
}

export default FormValidation
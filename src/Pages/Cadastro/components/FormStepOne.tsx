import { SubmitHandler, useForm } from 'react-hook-form';
import { FormDataSchemaStepOne, schemaStepOne } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormStepOneStyled } from './Form.styles';
import PasswordInput from '../../../components/common/PasswordInput';
import { AiOutlineMail } from 'react-icons/ai';
import { IoMdCard } from "react-icons/io";

import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';
import { handleCNPJChange } from '../../../utils';
import { TfiUnlock } from "react-icons/tfi";


interface Props{
    setvalue: React.Dispatch<React.SetStateAction<number>>
}

const FormStepOne = ({setvalue}: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields },
        setValue
    } = useForm<FormDataSchemaStepOne>({
        resolver: zodResolver(schemaStepOne)
    })

    const onSubmit: SubmitHandler<FormDataSchemaStepOne> = (data) => {
        console.log(data)
        setvalue(2)
    };

    return (
        <FormStepOneStyled onSubmit={handleSubmit(onSubmit)} noValidate id='form-step-one'>
            <Input
                id='input-email'
                icon={AiOutlineMail}
                placeholder='Email'
                {...register('email')}
                error={errors.email}
                isTouched={touchedFields.email}
            />
            <Input
                id='input-cnpj'
                icon={IoMdCard}
                placeholder='Cnpj'
                {...register('cnpj')}
                error={errors.cnpj}
                isTouched={touchedFields.cnpj}
                onChange={(e) => handleCNPJChange(e, setValue)}
            />
            <PasswordInput
                id='input-password'
                icon={TfiUnlock}
                placeholder="Senha"
                {...register('password')}
                error={errors.password}
                isTouched={touchedFields.password}
            />
            <PasswordInput
                id='input-confirm-password'
                icon={TfiUnlock}
                placeholder="Confirmar senha"
                {...register('confirmPassword')}
                error={errors.confirmPassword}
                isTouched={touchedFields.confirmPassword}
            />
            <Button id='button-register' type='submit'>Continuar</Button>
        </FormStepOneStyled>

    )
}

export default FormStepOne
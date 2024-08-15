import { SubmitHandler, useForm } from 'react-hook-form';
import { FormDataSchemaStepOne, schemaStepOne } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormStepOneStyled } from './Form.styles';
import PasswordInput from '../../../components/common/PasswordInput';
import { AiOutlineCreditCard, AiOutlineLock, AiOutlineMail } from 'react-icons/ai';
import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';
import { handleCNPJChange } from '../../../utils';

interface Props{
    setValor: React.Dispatch<React.SetStateAction<number>>
}

const FormStepOne = ({setValor}: Props) => {
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
        setValor(2)
    };

    return (
        <FormStepOneStyled onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input
                id='input-cadastro-email'
                icon={AiOutlineMail}
                placeholder='Email'
                {...register('email')}
                error={errors.email}
                isTouched={touchedFields.email}
            />
            <Input
                id='input-cadastro-cnpj'
                icon={AiOutlineCreditCard}
                placeholder='Cnpj'
                {...register('cnpj')}
                error={errors.cnpj}
                isTouched={touchedFields.cnpj}
                onChange={(e) => handleCNPJChange(e, setValue)}
            />
            <PasswordInput
                id='input-cadastro-senha'
                icon={AiOutlineLock}
                placeholder="Senha"
                {...register('password')}
                error={errors.password}
                isTouched={touchedFields.password}
            />
            <PasswordInput
                id='input-cadastro-confirmar-senha'
                icon={AiOutlineLock}
                placeholder="Confirmar senha"
                {...register('confirmPassword')}
                error={errors.confirmPassword}
                isTouched={touchedFields.confirmPassword}
            />
            <Button id='button-cadastro' type='submit'>Continuar</Button>
        </FormStepOneStyled>

    )
}

export default FormStepOne
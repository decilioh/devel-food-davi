import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDataSchema, schema } from '../schema'
import Input from '../../../components/common/Input';
import { AiOutlineMail } from 'react-icons/ai';
import PasswordInput from '../../../components/common/PasswordInput';
import { ButtonApp, FormLogin } from './Form.styles';
import { MdLockOpen, MdOutlineEmail } from 'react-icons/md';

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
        <FormLogin onSubmit={handleSubmit(onSubmit)} noValidate id='form-login'>
            <div className='margin-bottom'>
                <Input
                    id='input-email'
                    icon={MdOutlineEmail}
                    placeholder='E-mail'
                    {...register('email')}
                    error={errors.email}
                    isTouched={touchedFields.email}
                />
            </div>
            <PasswordInput
                id='input-password'
                icon={MdLockOpen}
                placeholder="Senha"
                {...register('password')}
                error={errors.password}
                isTouched={touchedFields.password}
            />
            <ButtonApp id='botao-submit' type='submit'>Logar</ButtonApp>
        </FormLogin>

    )
}

export default Form
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDataSchema, schema } from '../schema'
import Input from '../../../components/common/Input';
import { AiOutlineMail } from 'react-icons/ai';
import PasswordInput from '../../../components/common/PasswordInput';
import { ButtonApp, FormLogin } from './Form.styles';
import { MdLockOpen, MdOutlineEmail } from 'react-icons/md';
import { mockUser } from '../../../mocks/mockUser';
import { useContext } from 'react';
import { AuthContext, IAuthContextFunctions } from '../../../context/authContext';
import { IUserContextFunctions, UserContext } from '../../../context/userContext';
import { Bounce, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { authUser } from '../../../services/authUser';
import { AxiosError } from 'axios';

const Form = () => {
    const { signInSetCookies } = useContext(AuthContext) as IAuthContextFunctions
    const { setEmail, setPassword, setUser, email, password } = useContext(UserContext) as IUserContextFunctions

    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields }
    } = useForm<FormDataSchema>({
        resolver: zodResolver(schema)
    })

    const onSubmit: SubmitHandler<FormDataSchema> = async (data) => {
        if (data) {
            try {
                const user = { email: data.email, password: data.password }
                const auth = await authUser(user)
                if (auth) {
                    signInSetCookies(auth)
                    setPassword(data.password)
                    setUser({ email: email, password: password })
                    navigate('/admin/home')
                    return toast.success("Login realizado com sucesso!", {
                        transition: Bounce
                    })
                }
            } catch (error) {
                console.log(error)
                if(error instanceof AxiosError){
                    return toast.error(`${error.response?.data}`, {
                        transition: Bounce
                    })
                }
            }
        }
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
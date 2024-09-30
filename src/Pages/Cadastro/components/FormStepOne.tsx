import { SubmitHandler, useForm } from 'react-hook-form';
import { FormDataSchemaStepOne, schemaStepOne } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormStepOneStyled, SpacingContents } from './Form.styles';
import PasswordInput from '../../../components/common/PasswordInput';
import { IoMdCard } from "react-icons/io";

import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';
import { handleCNPJChange } from '../../../utils';
import { MdLockOpen, MdOutlineEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { SignupContext, signupProps } from '../../../context/signupContext';


interface Props {
    setvalue: React.Dispatch<React.SetStateAction<number>>
}

const FormStepOne = ({ setvalue }: Props) => {
    const navigate = useNavigate()
    const {setUser} = useContext(SignupContext) as signupProps

    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields, isSubmitting },
        setValue
    } = useForm<FormDataSchemaStepOne>({
        resolver: zodResolver(schemaStepOne)
    })

    const encryptPassword = async (password: string) => {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hash = await crypto.subtle.digest("SHA-256", data);
        let hashArray = Array.from(new Uint8Array(hash)); // Convert buffer to byte array
        let hashString = hashArray.map(b => String.fromCharCode(b)).join(''); // Convert bytes to string
        return btoa(hashString); // Encode string as base64
    }

    const onSubmit: SubmitHandler<FormDataSchemaStepOne> = async(data) => {
        const passwordEncrypted = await encryptPassword(data.password)
        if(isSubmitting) return null
        console.log(data)
        setUser((prevContent) => {
            const prevUser = prevContent || {
                name: "",
                email: "",
                password: "",
                cnpj: "",
                phoneNumber: "",
                foodType: "",
                photo: "",
                restaurantAddress: {
                    addressLabel: "",
                    postalCode: "",
                    street: "",
                    neighborhood: "",
                    city: "",
                    number: "",
                    state: ""
                }
            };
    
            return {
                ...prevUser, // Preserva os dados anteriores
                email: data.email,
                cnpj: data.cnpj,
                password: data.password,
            };
        });
        setvalue(2)
    };

    return (
        <FormStepOneStyled onSubmit={handleSubmit(onSubmit)} noValidate id='form-step-one'>
            <Input
                id='input-email'
                icon={MdOutlineEmail}
                placeholder='E-mail'
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
                icon={MdLockOpen}
                placeholder="Senha"
                {...register('password')}
                error={errors.password}
                isTouched={touchedFields.password}
            />
            <PasswordInput
                id='input-confirm-password'
                icon={IoMdCard}
                placeholder="Confirmar senha"
                {...register('confirmPassword')}
                error={errors.confirmPassword}
                isTouched={touchedFields.confirmPassword}
            />
            <SpacingContents style={{marginTop: "60px"}}>
                <Button isSubmitting={isSubmitting} id="button-return-page" onClick={() => navigate("/login")}>
                    Voltar
                </Button>
                <Button isSubmitting={isSubmitting} id="button-submit" type="submit">
                    Continuar
                </Button>
            </SpacingContents>
        </FormStepOneStyled>

    )
}

export default FormStepOne
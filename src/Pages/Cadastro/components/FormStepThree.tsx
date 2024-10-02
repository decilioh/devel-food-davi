import { SubmitHandler, useForm } from 'react-hook-form';
import { FormDataSchemaStepThree, schemaStepThree } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDivisionOne, FormStepOneStyled, SpacingContents } from './Form.styles';

import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';
import { FaHouse } from "react-icons/fa6";
import { extrairNumeros, handleCepChange } from '../../../utils';
import { useContext, useEffect, useState } from 'react';
import { SignupContext, signupProps } from '../../../context/signupContext';
import { signUpRestaurant } from '../../../services/signUp';
import { toast } from 'react-toastify';

interface Props {
    setvalue: React.Dispatch<React.SetStateAction<number>>
}


const FormStepThree = ({ setvalue }: Props) => {
    const { user, setUser } = useContext(SignupContext) as signupProps
    const [isReadyToSubmit, setIsReadyToSubmit] = useState(false)


    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields, isSubmitting,  },
        setValue
        
    } = useForm<FormDataSchemaStepThree>({
        resolver: zodResolver(schemaStepThree)
    })

    const onSubmit: SubmitHandler<FormDataSchemaStepThree> = async(data) => {
        if (!user || isSubmitting) return null;

        setUser({
            ...user,
            restaurantAddress: {
                addressLabel: data.nicknameAddress,
                city: data.city,
                neighborhood: data.neighborhood,
                number: data.number,
                postalCode: extrairNumeros(data.cep),
                state: data.state,
                street: data.road,
            }
        });

        setIsReadyToSubmit(true)
    };

    useEffect(() => {
        if (isReadyToSubmit && user) {
            const submitToApi = async () => {
                try {
                    const response = await signUpRestaurant(user)
                    console.log(response)
                    setvalue(4)
                } catch (error) {
                    console.error(error)
                    setvalue(5)
                }
            };

            submitToApi()
        }
    }, [isReadyToSubmit, user, setvalue])


    return (
        <FormStepOneStyled onSubmit={handleSubmit(onSubmit)} noValidate id='form-step-three'>
            <FormDivisionOne>
                <div className='esquerda'>
                    <Input
                        id='input-nickname-address'
                        icon={FaHouse}
                        placeholder='Apelido do endereço'
                        {...register('nicknameAddress')}
                        error={errors.nicknameAddress}
                        isTouched={touchedFields.nicknameAddress}
                    />
                </div>
                <div className='direita'>
                    <Input
                        id='input-cep'
                        icon={FaHouse}
                        placeholder='CEP'
                        {...register('cep')}
                        error={errors.cep}
                        isTouched={touchedFields.cep}
                        onChange={(e) => handleCepChange(e, setValue)}
                        maxLength={9}
                    />
                </div>
            </FormDivisionOne>
            <Input
                id='input-road'
                icon={FaHouse}
                placeholder='Rua'
                {...register('road')}
                error={errors.road}
                isTouched={touchedFields.road}
            />
            <Input
                id='input-city'
                icon={FaHouse}
                placeholder='Cidade'
                {...register('city')}
                error={errors.city}
                isTouched={touchedFields.city}
            />
            <Input
                id='input-neighborhood'
                icon={FaHouse}
                placeholder='Bairro'
                {...register('neighborhood')}
                error={errors.neighborhood}
                isTouched={touchedFields.neighborhood}
            />
            <FormDivisionOne>
                <div className="esquerda2">
                    <Input
                        id='input-state'
                        icon={FaHouse}
                        placeholder='Estado'
                        {...register('state')}
                        error={errors.state}
                        isTouched={touchedFields.state}
                    />
                </div>
                <div className="direita2">
                    <Input
                        style={{ width: "1005%" }}
                        id='input-number'
                        icon={FaHouse}
                        placeholder='Número'
                        {...register('number')}
                        error={errors.number}
                        isTouched={touchedFields.number}
                    />
                </div>


            </FormDivisionOne>
            <SpacingContents style={{ marginTop: "53px" }}>
                <Button isSubmitting={isSubmitting} id="button-return-page" onClick={() => setvalue(1)}>
                    Voltar
                </Button>
                <Button isSubmitting={isSubmitting} id="button-submit" type="submit">
                    {isSubmitting ? "Enviando..." : "Continuar"}
                </Button>
            </SpacingContents>
        </FormStepOneStyled>

    )
}

export default FormStepThree
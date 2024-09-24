import { SubmitHandler, useForm } from 'react-hook-form';
import { FormDataSchemaStepTwo, schemaStepTwo } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormStepOneStyled, SpacingContents } from './Form.styles';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAccessibility, MdOutlineAccessibility } from "react-icons/md";
import { MdFastfood } from "react-icons/md";


import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';
import Select from '../../../components/common/Select';
import { handlePhoneChange } from '../../../utils';
import { FaPhoneAlt } from 'react-icons/fa';
import { optionsSelect } from '../../../utils/optionsSelect';
import { useContext } from 'react';
import { SignupContext, signupProps } from '../../../context/signupContext';

interface Props{
    setvalue: React.Dispatch<React.SetStateAction<number>>
}

const FormStepTwo = ({setvalue}: Props) => {
    const {setUser, user} = useContext(SignupContext) as signupProps

    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields },
        setValue
    } = useForm<FormDataSchemaStepTwo>({
        resolver: zodResolver(schemaStepTwo)
    })

    const onSubmit: SubmitHandler<FormDataSchemaStepTwo> = (data) => {
        if(!user) return null
        console.log(data)
        setUser({
                cnpj: user.cnpj, 
                email: user.email,
                password: user.password,
                restaurantAddress: user.restaurantAddress,
                name: data["name"],
                phoneNumber: data["telephone"].replace(/[^\d]/g, ''),
                foodType: data["typesOfFood"].join(",")
        })
        setvalue(3)
    };

    return (
        <FormStepOneStyled onSubmit={handleSubmit(onSubmit)} noValidate id='form-step-two'>
            <Input
                id='input-name'
                icon={MdOutlineAccessibility}
                placeholder='Nome'
                {...register('name')}
                error={errors.name}
                isTouched={touchedFields.name}
            />
            <Input
                id='input-telephone'
                icon={FaPhoneAlt}
                placeholder='Telefone'
                {...register('telephone')}
                error={errors.telephone}
                isTouched={touchedFields.telephone}
                onChange={(e) => handlePhoneChange(e, setValue)}
            />
            <Select
                id='select-typesOfFood'
                icon={MdFastfood}
                {...register('typesOfFood')}
                error={errors.typesOfFood
            }
                onCustomChange={(selectedValues) => setValue("typesOfFood", selectedValues)}
                options={optionsSelect}
            /> 
            <SpacingContents style={{marginTop: "64px"}}>
                <Button id="button-return-page" onClick={() => setvalue(1)}>
                    Voltar
                </Button>
                <Button id="button-submit" type="submit">
                    Continuar
                </Button>
            </SpacingContents>
        </FormStepOneStyled>

    )
}

export default FormStepTwo
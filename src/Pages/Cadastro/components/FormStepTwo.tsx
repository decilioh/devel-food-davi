import { SubmitHandler, useForm } from 'react-hook-form';
import { FormDataSchemaStepTwo, schemaStepTwo } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormStepOneStyled } from './Form.styles';
import { IoFastFoodOutline } from "react-icons/io5";
import { FaRegUser, FaPhone  } from "react-icons/fa";

import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';
import Select from '../../../components/common/Select';
import { handlePhoneChange } from '../../../utils';

interface Props{
    setvalue: React.Dispatch<React.SetStateAction<number>>
}

const FormStepTwo = ({setvalue}: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields },
        setValue
    } = useForm<FormDataSchemaStepTwo>({
        resolver: zodResolver(schemaStepTwo)
    })

    const onSubmit: SubmitHandler<FormDataSchemaStepTwo> = (data) => {
        console.log(data)
        setvalue(3)
    };

    return (
        <FormStepOneStyled onSubmit={handleSubmit(onSubmit)} noValidate id='form-step-two'>
            <Input
                id='input-name'
                icon={FaRegUser}
                placeholder='Nome'
                {...register('name')}
                error={errors.name}
                isTouched={touchedFields.name}
            />
            <Input
                id='input-telephone'
                icon={FaPhone}
                placeholder='Telefone'
                {...register('telephone')}
                error={errors.telephone}
                isTouched={touchedFields.telephone}
                onChange={(e) => handlePhoneChange(e, setValue)}
            />
            <Select
                id='select-typesOfFood
'
                icon={IoFastFoodOutline}
                {...register('typesOfFood')}
                error={errors.typesOfFood
}
                onCustomChange={(selectedValues) => setValue("typesOfFood", selectedValues)}
                options={[
                    { value: 'brasileiro', label: 'Brasileiro' },
                    { value: 'picante', label: 'Picante' },
                    { value: 'mexicana', label: 'Mexicana' },
                    { value: 'japonesa', label: 'Japonesa' },
                  ]}
            />
            <Button id='button-register' type='submit'>Continuar</Button>
        </FormStepOneStyled>

    )
}

export default FormStepTwo
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
    setValor: React.Dispatch<React.SetStateAction<number>>
}

const FormStepTwo = ({setValor}: Props) => {
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
        setValor(3)
    };

    return (
        <FormStepOneStyled onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input
                id='input-cadastro-nome'
                icon={FaRegUser}
                placeholder='Nome'
                {...register('nome')}
                error={errors.nome}
                isTouched={touchedFields.nome}
            />
            <Input
                id='input-cadastro-telefone'
                icon={FaPhone}
                placeholder='Telefone'
                {...register('telefone')}
                error={errors.telefone}
                isTouched={touchedFields.telefone}
                onChange={(e) => handlePhoneChange(e, setValue)}
            />
            <Select
                id='select-cadastro-tiposDeComida'
                icon={IoFastFoodOutline}
                {...register('tiposDeComida')}
                error={errors.tiposDeComida}
                onCustomChange={(selectedValues) => setValue("tiposDeComida", selectedValues)}
                options={[
                    { value: 'brasileiro', label: 'Brasileiro' },
                    { value: 'picante', label: 'Picante' },
                    { value: 'mexicana', label: 'Mexicana' },
                    { value: 'japonesa', label: 'Japonesa' },
                  ]}
            />
            <Button id='button-cadastro' type='submit'>Continuar</Button>
        </FormStepOneStyled>

    )
}

export default FormStepTwo
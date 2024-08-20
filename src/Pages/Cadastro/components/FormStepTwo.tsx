import { SubmitHandler, useForm } from 'react-hook-form';
import { FormDataSchemaStepTwo, schemaStepTwo } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormStepOneStyled } from './Form.styles';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAccessibility } from "react-icons/md";
import { MdFastfood } from "react-icons/md";


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
                icon={MdAccessibility}
                placeholder='Nome'
                {...register('name')}
                error={errors.name}
                isTouched={touchedFields.name}
            />
            <Input
                id='input-telephone'
                icon={BsFillTelephoneFill }
                placeholder='Telefone'
                {...register('telephone')}
                error={errors.telephone}
                isTouched={touchedFields.telephone}
                onChange={(e) => handlePhoneChange(e, setValue)}
            />
            <Select
                id='select-typesOfFood
'
                icon={MdFastfood}
                {...register('typesOfFood')}
                error={errors.typesOfFood
}
                onCustomChange={(selectedValues) => setValue("typesOfFood", selectedValues)}
                options={[
                    { value: 'brasileira', label: 'Brasileira' },
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
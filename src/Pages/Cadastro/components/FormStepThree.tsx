import { SubmitHandler, useForm } from 'react-hook-form';
import { FormDataSchemaStepThree, schemaStepThree } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDivisionOne, FormStepOneStyled } from './Form.styles';

import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';
import { FaHouse } from "react-icons/fa6";
import { handleCepChange } from '../../../utils';

interface Props{
    setvalue: React.Dispatch<React.SetStateAction<number>>
}


const FormStepThree = ({setvalue}: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields },
        setValue
    } = useForm<FormDataSchemaStepThree>({
        resolver: zodResolver(schemaStepThree)
    })

    const onSubmit: SubmitHandler<FormDataSchemaStepThree> = (data) => {
        console.log(data)
        setvalue(4)
    };

    return (
        <FormStepOneStyled onSubmit={handleSubmit(onSubmit)} noValidate id='form-step-three'>
            <FormDivisionOne>
                <Input
                    id='input-nickname-address'
                    icon={FaHouse}
                    placeholder='Apelido endereço'
                    {...register('nicknameAddress')}
                    error={errors.nicknameAddress}
                    isTouched={touchedFields.nicknameAddress}
                />
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
                <Input
                    id='input-state'
                    icon={FaHouse}
                    placeholder='Estado'
                    {...register('state')}
                    error={errors.state}
                    isTouched={touchedFields.state}
                />
                <Input
                    id='input-number'
                    icon={FaHouse}
                    placeholder='Número'
                    {...register('number')}
                    error={errors.number}
                    isTouched={touchedFields.number}
                />
            </FormDivisionOne>
            <Button id='button-register' type='submit'>Continuar</Button>
        </FormStepOneStyled>

    )
}

export default FormStepThree
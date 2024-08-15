import { SubmitHandler, useForm } from 'react-hook-form';
import { FormDataSchemaStepThree, schemaStepThree } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDivisionOne, FormStepOneStyled } from './Form.styles';

import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';
import { FaHouse } from "react-icons/fa6";
import { handleCepChange } from '../../../utils';

interface Props{
    setValor: React.Dispatch<React.SetStateAction<number>>
}


const FormStepThree = ({setValor}: Props) => {
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
        setValor(4)
    };

    return (
        <FormStepOneStyled onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormDivisionOne>
                <Input
                    id='input-cadastro-apelidoEndereco'
                    icon={FaHouse}
                    placeholder='Apelido endereço'
                    {...register('apelidoEndereco')}
                    error={errors.apelidoEndereco}
                    isTouched={touchedFields.apelidoEndereco}
                />
                <Input
                    id='input-cadastro-cep'
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
                id='input-cadastro-rua'
                icon={FaHouse}
                placeholder='Rua'
                {...register('rua')}
                error={errors.rua}
                isTouched={touchedFields.rua}
            />
            <Input
                id='input-cadastro-cidade'
                icon={FaHouse}
                placeholder='Cidade'
                {...register('cidade')}
                error={errors.cidade}
                isTouched={touchedFields.cidade}
            />
            <Input
                id='input-cadastro-bairro'
                icon={FaHouse}
                placeholder='Bairro'
                {...register('bairro')}
                error={errors.bairro}
                isTouched={touchedFields.bairro}
            />
            <FormDivisionOne>
                <Input
                    id='input-cadastro-estado'
                    icon={FaHouse}
                    placeholder='Estado'
                    {...register('estado')}
                    error={errors.estado}
                    isTouched={touchedFields.estado}
                />
                <Input
                    id='input-cadastro-numero'
                    icon={FaHouse}
                    placeholder='Numero'
                    {...register('numero')}
                    error={errors.numero}
                    isTouched={touchedFields.numero}
                />
            </FormDivisionOne>
            <Button id='button-cadastro' type='submit'>Continuar</Button>
        </FormStepOneStyled>

    )
}

export default FormStepThree
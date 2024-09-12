import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormDataSchemaAddress, schemaAddress } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDivisionOne, FormStepOneStyled } from '../../Cadastro/components/Form.styles';
import Input from '../../../components/common/Input';
import { FaHouse } from 'react-icons/fa6';
import { handleCepChange } from '../../../utils';

const FormAddress = ({ onSubmitRef }: { onSubmitRef: React.MutableRefObject<(() => void) | null> }) => {
    const { register, handleSubmit, formState: { errors, touchedFields }, setValue, getValues } = useForm<FormDataSchemaAddress>({
        resolver: zodResolver(schemaAddress),
    });

    const onSubmit = () => {
        // Usamos getValues para pegar os dados do formulário
        const data = getValues();
        return data; // Certifique-se de que os dados estão sendo retornados corretamente
    };
    
    useEffect(() => {
        onSubmitRef.current = async () => {
            const data = getValues(); // Captura os dados do formulário
            console.log("FormAddress Data:", data); // Adiciona log para verificar os dados
            return data;
        };
    }, [onSubmitRef, getValues]);

    
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
        </FormStepOneStyled>
    )
}

export default FormAddress
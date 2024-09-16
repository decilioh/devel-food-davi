import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { FormDataSchemaAddress, schemaAddress } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDivisionOne, FormStepOneStyled } from '../../Cadastro/components/Form.styles';
import Input from '../../../components/common/Input';
import { FaHouse } from 'react-icons/fa6';
import { handleCepChange } from '../../../utils';

const FormAddress = ({ onSubmitRef }: { onSubmitRef: React.MutableRefObject<(() => Promise<any>) | null> }) => {
    const { register, handleSubmit, formState: { errors, touchedFields }, setValue } = useForm<FormDataSchemaAddress>({
        resolver: zodResolver(schemaAddress),
    });

    const onSubmit = async (data: FormDataSchemaAddress) => {
        console.log("FormAddress Data Inside onSubmit:", data); // Log para verificar os dados do formulário
        return data;
    };
    
    useEffect(() => {
        onSubmitRef.current = async () => {
            return new Promise((resolve, reject) => {
                handleSubmit((data) => {
                    console.log("FormAddress Data from useEffect:", data); // Log para verificar se os dados estão sendo enviados
                    resolve(data);
                }, (error) => {
                    console.error("FormAddress Validation Errors:", error); // Log de erro para validação
                    reject(error); // Rejeita caso tenha erro
                })();
            });
        };
    }, [onSubmitRef, handleSubmit]);

    return (
        <FormStepOneStyled>
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
                        style={{ width: "100%" }}
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

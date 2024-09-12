import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormDataSchemaPersonInfos, schemaPersonInfos } from '../schema';
import Input from '../../../components/common/Input';
import { MdOutlineEmail } from 'react-icons/md';
import { IoMdCard } from 'react-icons/io';
import { MdFastfood } from 'react-icons/md';
import Select from '../../../components/common/Select';
import { optionsSelect } from '../../../utils/optionsSelect';
import { handlePhoneChange } from '../../../utils';

const FormPersonInfos = ({ onSubmitRef }: { onSubmitRef: React.MutableRefObject<(() => Promise<any>) | null> }) => {
  const { register, handleSubmit, formState: { errors, touchedFields }, setValue } = useForm<FormDataSchemaPersonInfos>({
    resolver: zodResolver(schemaPersonInfos),
  });

  // Mudamos a assinatura do onSubmit para pegar os dados diretamente
  const onSubmit = async (data: FormDataSchemaPersonInfos) => {
    console.log("FormPersonInfos Data Inside onSubmit:", data); // Log para verificar os dados do formulário
    return data;
  };

  useEffect(() => {
    onSubmitRef.current = async () => {
      return new Promise((resolve) => {
        handleSubmit((data) => {
          console.log("FormPersonInfos Data from useEffect:", data); // Log para verificar se os dados estão sendo enviados
          resolve(data);
        })();
      });
    };
  }, [onSubmitRef, handleSubmit]);

  return (
    <form>
      {/* Email Input */}
      <Input
        id='email-input'
        icon={MdOutlineEmail}
        disabled={true}
        placeholder='tiago.pereira@develcode.com'
      />

      {/* CNPJ Input */}
      <Input
        id='cnpj-input'
        icon={IoMdCard}
        placeholder='46.233.005/0001-65'
        disabled={true}
      />

      {/* Name of Restaurant Input */}
      <Input
        id='restaurant-input'
        icon={IoMdCard}
        error={errors.name}
        isTouched={touchedFields.name}
        {...register('name')}
        placeholder="Nome do Restaurante"
      />

      {/* Telephone Input */}
      <Input
        id='telephone-input'
        icon={IoMdCard}
        error={errors.telephone}
        isTouched={touchedFields.telephone}
        {...register('telephone')}
        placeholder="Telefone"
        onChange={(e) => handlePhoneChange(e, setValue)}
      />

      {/* Types of Food Select */}
      <Select
        id='typesOfFood-input'
        icon={MdFastfood}
        error={errors.typesOfFood}
        options={optionsSelect}
        onCustomChange={(selectedValues: string[]) => setValue('typesOfFood', selectedValues)}
        text="Tipos de comida"
      />
    </form>
  );
};

export default FormPersonInfos;

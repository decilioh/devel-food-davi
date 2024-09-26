import React, { useEffect, useState } from 'react';
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
import { ErrorMessage, HiddenInput, ImageUploadContainer, LabelText, UploadIcon } from '../../NewDishes/newDishes.styles';
import { CiImageOn } from 'react-icons/ci';

const FormPersonInfos = ({ onSubmitRef }: { onSubmitRef: React.MutableRefObject<(() => Promise<any>) | null> }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

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

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
      setValue("image", file);
    }
  };

  return (
    <form style={{ margin: "auto auto 30px auto",justifyContent: "center", display: "flex", flexDirection: "column", height: "500px" }}>
      {/* Email Input */}
      <div id="div-image" style={{ margin: "auto auto 20px auto", alignItems: "center", justifyContent: "center" }}>
        <label htmlFor="input-image" >
          <ImageUploadContainer imageUrl={imageUrl ?? undefined} errorBorder={errors.image} style={{ width: "230px", height: '200px' }}>
            {!imageUrl && (
              <>
                <UploadIcon>
                  <CiImageOn />
                </UploadIcon>
                <LabelText>Adicionar imagem</LabelText>
              </>
            )}

            <HiddenInput
              id="input-image"
              accept="image/*"
              type="file"
              {...register("image")}
              onChange={handleImageChange}
            />

          </ImageUploadContainer>
        </label>
        {errors.image && <ErrorMessage>{errors.image.message}</ErrorMessage>}
      </div>

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

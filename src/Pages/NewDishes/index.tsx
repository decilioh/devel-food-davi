import styled from "styled-components"
import { ButtonApp } from "../../components/common/Button/button.styles"
import { CiImageOn } from "react-icons/ci";
import Input from "../../components/common/Input";
import TextArea from "../../components/common/TextArea";
import Select from "../../components/common/Select";
import { MdFastfood } from "react-icons/md";
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import { FormData, schema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/common/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ButtonHeader, ErrorMessage, FormContent, HeaderMenu, HiddenInput, ImageUploadContainer, LabelText, MainContainer, OtherInputs, UploadIcon } from "./newDishes.styles";
import { optionsSelect } from "../../utils/optionsSelect";
import { Helmet } from "react-helmet-async";





const NewDishes = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, touchedFields }, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    toast.success('Prato adicionado com sucesso!', {
      onClose: () => {
        toast.error("Ocorreu algum erro!", {
          onClose: () => {
            navigate(-1)
          }
        })
      }
    });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
      setValue("image", file);
    }
  };

  return (
    <MainContainer>
      <HeaderMenu>
        <ButtonHeader id="button-function-menu" onClick={() => navigate(-1)}>
          <FaArrowLeftLong />
        </ButtonHeader>
        <h2>Cadastro de novos pratos</h2>
      </HeaderMenu>
      <FormContent onSubmit={handleSubmit(onSubmit)}>
        <div id="div-image">

        <label htmlFor="input-image">
          <ImageUploadContainer imageUrl={imageUrl ?? undefined} errorBorder={errors.image}>
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
        <OtherInputs>
          <Input id="input-name" placeholder="Nome" {...register("name")} error={errors.name} isTouched={touchedFields.name} />
          <TextArea id="input-description" placeholder="Descrição" {...register("description")} error={errors.description} isTouched={touchedFields.description} />
          <Input id="input-price" placeholder="Preço" {...register("price")} error={errors.price} isTouched={touchedFields.price} />
          <Select
            id="select-typesOfFood"
            icon={MdFastfood}
            {...register("typesOfFood")}
            error={errors.typesOfFood}
            onCustomChange={(selectedValues) => setValue("typesOfFood", selectedValues)}
            options={optionsSelect}
          />
          <Button id="button-submit" type="submit">Salvar</Button>
        </OtherInputs>
      </FormContent>
      <Helmet title="Novo prato" />
    </MainContainer>
  );
};

export default NewDishes;
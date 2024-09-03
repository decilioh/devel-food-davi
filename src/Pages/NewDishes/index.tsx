import styled from "styled-components"
import { ButtonApp } from "../../components/common/Button/button.styles"
import { HiArrowNarrowLeft } from "react-icons/hi";
import { CiImageOn } from "react-icons/ci";
import Input from "../../components/common/Input";
import TextArea from "../../components/common/TextArea";
import Select from "../../components/common/Select";
import { MdFastfood } from "react-icons/md";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormData, schema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/common/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";



export const MainContainer = styled.main`
    max-width: 1279px;
    width: 100%;
    margin: 70px 200px auto auto;
    height: calc(100vh - 150px);
    display: flex;
    flex-direction: column;
    align-items: start;

    @media screen and (max-width: 1180px){
        margin: auto;
    }

`

export const HeaderMenu = styled.section`
    width: 1009px;
    display: flex;
    justify-content: space-between;
    h2{
        /* Menu do restaurante */
        font-family: 'Roboto Condensed';
        font-style: normal;
        font-weight: 500;
        font-size: 48px;
        line-height: 56px;
        margin: 0;

        color: ${({ theme }) => theme.primary};
        @media screen and (max-width: 1180px){
            text-align: center;
        }
    }

    @media screen and (max-width: 1180px){
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

`

export const ButtonHeader = styled(ButtonApp)`
    max-width: 73px;
    height: 51px;
    font-size: 2rem;
    margin: 0;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 20px;
    svg{
        width: 51px;
        height: 51px;
    }
`

export const FormContent = styled.form`
    margin: 0 auto;
    display: flex;
`

const ImageUploadContainer = styled.div<{ imageUrl?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 271px;
  height: 271px;
  background-color: #d9d9d9;
  border-radius: 24px;
  cursor: pointer;
  text-align: center;
  background-image: ${({ imageUrl }) => (imageUrl ? `url(${imageUrl})` : "none")};
  background-size: cover;
  background-position: center;
`;

const HiddenInput = styled.input`
  display: none;
`;

const UploadIcon = styled.div`
  color: #383838;
  font-size: 64px;
  svg {
    width: 64px;
    height: 64px;
  }
`;

const LabelText = styled.p`
  font-size: 18px;
  color: #383838;
  margin-top: 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
`;

const OtherInputs = styled.div`
  textarea {
    width: 361px;
    height: 179px;
  }
`;

const NewDishes = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, touchedFields }, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };

  return (
    <MainContainer>
      <HeaderMenu>
        <ButtonHeader id="button-function-menu">
          <FaArrowLeftLong />
        </ButtonHeader>
        <h2>Cadastro de novos pratos</h2>
      </HeaderMenu>
      <FormContent onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="input-image">
          <ImageUploadContainer imageUrl={imageUrl ?? undefined}>
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
              type="file"
              accept="image/*"
              {...register("image")}
              onChange={handleImageChange}
            />
          </ImageUploadContainer>
        </label>
        <OtherInputs>
          <Input id="input-name" placeholder="Nome" {...register("name")} error={errors.name} isTouched={touchedFields.name}/>
          <TextArea id="input-description" placeholder="Descrição" {...register("description")} error={errors.description} isTouched={touchedFields.description}/>
          <Input id="input-price" placeholder="Preço" {...register("price")} error={errors.price} isTouched={touchedFields.price}/>
          <Select
            id="select-typesOfFood"
            icon={MdFastfood}
            {...register("typesOfFood")}
            error={errors.typesOfFood}
            onCustomChange={(selectedValues) => setValue("typesOfFood", selectedValues)}
            options={[
              { value: "brasileira", label: "Brasileira" },
              { value: "picante", label: "Picante" },
              { value: "mexicana", label: "Mexicana" },
              { value: "japonesa", label: "Japonesa" },
              { value: "americana", label: "Americana" },
              { value: "irlandesa", label: "Irlandesa" },
              { value: "italiana", label: "Italiana" },
              { value: "arabe", label: "Árabe" },
            ]}
          />
          <Button id="button-submit">Salvar</Button>
        </OtherInputs>
      </FormContent>
    </MainContainer>
  );
};

export default NewDishes;
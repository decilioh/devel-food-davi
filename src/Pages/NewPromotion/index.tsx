import styled from "styled-components"
import { ButtonApp } from "../../components/common/Button/button.styles"
import { CiImageOn } from "react-icons/ci";
import Input from "../../components/common/Input";
import { MdFastfood } from "react-icons/md";
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import { FormData, schema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/common/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ButtonHeader, ErrorMessage, FormContent, HeaderMenu, HiddenInput, ImageUploadContainer, LabelText, MainContainer, OtherInputs, UploadIcon } from "./newPromotion.styles";
import { optionsSelect } from "../../utils/optionsSelect";
import { LuCalendarDays } from "react-icons/lu";
import { Divisor } from "../Home/Home.styles";
import { Helmet } from "react-helmet-async";





const NewPromotion = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, touchedFields }, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    toast.success('Promoção adicionada com sucesso!', {
      onClose: () => {
        toast.error("Ocorreu algum erro!", {
          onClose: () => {
            navigate(-1)
          }
        })
      }
    });
  };

  const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setStartDate(newDate);
    setValue("startDate", newDate);
    if (endDate && newDate > endDate) {
        setEndDate("");
        setValue("endDate", "");
    }
};
const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setEndDate(newDate);
    setValue("endDate", newDate);
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
        <h2>Cadastro de novas promoções</h2>
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
          <Input id="input-name" placeholder="Nome da promoção" {...register("name")} error={errors.name} isTouched={touchedFields.name} />
          {/* Input para a porcentagem de desconto */}
          <Input id="input-discount" placeholder="Percentual %" type="number" {...register("discount")} error={errors.discount} isTouched={touchedFields.discount} />

          {/* Inputs para as datas */}
          <div>
            <label htmlFor="input-start-date">Data inicial</label>
            <Input
              id="input-start-date"
              type="date"
              placeholder="Início"
              icon={LuCalendarDays}
              {...register("startDate")}
              error={errors.startDate}
              isTouched={touchedFields.startDate}
              showIcon={true}
              onChange={handleStartDateChange} // Adicione esta linha
            />
          </div>
          <div>
            <label htmlFor="input-end-date">Data Final</label>
            <Input
              id="input-end-date"
              type="date"
              placeholder="Fim"
              icon={LuCalendarDays}
              {...register("endDate")}
              error={errors.endDate}
              isTouched={touchedFields.endDate}
              showIcon={true}
              onChange={handleEndDateChange} // Adicione esta linha
            />
          </div>
          <Button id="button-submit" type="submit" style={{marginTop: "56px", textTransform: "capitalize"}}>Cadastrar</Button>
        </OtherInputs>
      </FormContent>
      <Helmet title="Nova promoção" />
    </MainContainer>
  );
};

export default NewPromotion;
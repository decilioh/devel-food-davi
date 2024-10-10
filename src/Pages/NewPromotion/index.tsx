import styled from "styled-components";
import { ButtonApp } from "../../components/common/Button/button.styles";
import { CiImageOn } from "react-icons/ci";
import Input from "../../components/common/Input";
import { MdFastfood } from "react-icons/md";
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import { FormData, schema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/common/Button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonHeader, ErrorMessage, FormContent, HeaderMenu, MainContainer, OtherInputs } from "./newPromotion.styles";
import { optionsSelect } from "../../utils/optionsSelect";
import { LuCalendarDays } from "react-icons/lu";
import { Helmet } from "react-helmet-async";
import { AuthContext, IAuthContextFunctions } from "../../context/authContext";
import { uploadImage } from "../../hooks/firebaseStorage";
import { createPromotion } from "../../services/promotions/createPromotion";
import { updatePromotion } from "../../services/promotions/updatePromotion"; // Supondo que você tenha um serviço de atualização
import { jwtDecode } from "jwt-decode";
import { getAllPromotionsFromId, IPromotionById } from "../../services/promotions/getAllPromotionsById";
import { IPropsMockPromotions } from "../../mocks/dishes";
import { HiddenInput, ImageUploadContainer, LabelText, UploadIcon } from "../NewDishes/newDishes.styles";

const NewPromotion = () => {
  const { token } = useContext(AuthContext) as IAuthContextFunctions;
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [promotions, setPromotions] = useState<Array<IPromotionById>>([]);
  const { id } = useParams(); // Para pegar o id da promoção
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors, touchedFields, isSubmitting }, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (id && token) {
      const fetchPromotionData = async () => {
        try {
          const decoded = jwtDecode(token);
          if (!decoded.sub) return null;
          let data: Array<IPromotionById> = await getAllPromotionsFromId(token, decoded.sub);
          data = data.filter((promotion) => promotion.idPromotion.toString() === id);

          const startDateFormatted = formatDateCreate(data[0].startDate); // Formata a data de início
          const endDateFormatted = formatDateCreate(data[0].endDate); // Formata a data final

          setValue("name", data[0].name);
          setValue("discount", data[0].discountPercentage.toString());
          setImageUrl(data[0].imageUrl)
          setValue("startDate", startDateFormatted);
          setValue("image", data[0].imageUrl)
          setValue("endDate", endDateFormatted);
        } catch (error) {
          toast.error("Ocorreu um erro ao buscar a promoção");
          navigate(-1);
        }
      };
      fetchPromotionData();
    }
  }, [id, token, navigate, setValue]);

  // Função para formatar a data do formato DD/MM/YYYY para YYYY-MM-DD
  const formatDateCreate = (dateString: string): string => {
    const [day, month, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
  };

  const formatDateUpdate = (dateString: string): string => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (!token) return null;
    if (isSubmitting) return null;
    const decoded = jwtDecode(token);
    if (!decoded.sub) return null;

    try {
      const imageUrl = await uploadImage(data.image)
      console.log(imageUrl)

      if (id) {
        await updatePromotion({
          imageUrl: imageUrl,
          name: data.name,
          discountPercentage: data.discount.toString(),
          startDate: formatDateUpdate(data.startDate),
          endDate: formatDateUpdate(data.endDate)
        }, token, id)
      } else {
        await createPromotion({
          imageUrl: imageUrl,
          name: data.name,
          discountPercentage: data.discount.toString(),
          startDate: formatDateUpdate(data.startDate),
          endDate: formatDateUpdate(data.endDate)
        }, token, decoded.sub)
      }
      toast.success(id ? 'Promoção alterada com sucesso!' : "Promoção adicionada com sucesso!", {
        onClose: () => {
          navigate(-1)
        }
      })
    } catch (error) {
      toast.error("Ocorreu algum erro!", {
        onClose: () => {
        }
      })
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
      setValue("image", file);
    }
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

  return (
    <MainContainer>
      <HeaderMenu>
        <ButtonHeader id="button-function-menu" onClick={() => navigate(-1)}>
          <FaArrowLeftLong />
        </ButtonHeader>
        <h2>{id ? "Atualizar promoção existente" : "Cadastro de novas promoções"}</h2>
      </HeaderMenu>
      <FormContent onSubmit={handleSubmit(onSubmit)}>
        <div id="div-image">
          <label htmlFor="input-image">
          <ImageUploadContainer imageUrl={imageUrl} errorBorder={errors.image}>
              {imageUrl && <img src={imageUrl} alt="Preview" style={{ width: '100%', height: '100%', borderRadius: '1.5rem' }} />}
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
          <Input id="input-discount" placeholder="Percentual %" type="number" {...register("discount")} error={errors.discount} isTouched={touchedFields.discount} />

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
              onChange={handleStartDateChange}
              min={getTodayDate()} // Adiciona o mínimo para a data de hoje
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
              onChange={handleEndDateChange}
              min={startDate || getTodayDate()} // Define o mínimo da data final para a data inicial selecionada ou hoje
            />
          </div>
          <Button id="button-submit" type="submit" style={{ marginTop: "56px", textTransform: "capitalize" }} isSubmitting={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Cadastrar"}
          </Button>
        </OtherInputs>
      </FormContent>
      <Helmet title="Nova promoção" />
    </MainContainer>
  );
};

export default NewPromotion;

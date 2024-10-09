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
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonHeader, ErrorMessage, FormContent, HeaderMenu, HiddenInput, ImageUploadContainer, LabelText, MainContainer, OtherInputs, UploadIcon } from "./newDishes.styles";
import { optionsSelect } from "../../utils/optionsSelect";
import { Helmet } from "react-helmet-async";
import { uploadImage } from "../../hooks/firebaseStorage";
import { createDish } from "../../services/dish/createDish";
import { AuthContext, IAuthContextFunctions } from "../../context/authContext";
import { jwtDecode } from "jwt-decode";
import { getDishById, IDishById } from "../../services/dish/getDishById";
import { updateDish } from "../../services/dish/updateDish";


const NewDishes = () => {
  const [selectedFoodTypes, setSelectedFoodTypes] = useState<string[]>([]); // Novo estado para manter os valores selecionados
  const { token } = useContext(AuthContext) as IAuthContextFunctions
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { id } = useParams()
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors, touchedFields, isSubmitting }, setValue } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (!id || !token) return;

    const fetchDishData = async () => {
      try {
        const data: IDishById = await getDishById(token, id);
        setValue("name", data.dishName);
        setValue("description", data.description);
        setValue("price", data.price.toString().replace(".", ","));
        setValue("image", data.photo)
        setSelectedFoodTypes(data.foodType.split(" "));
        setValue("typesOfFood", data.foodType.split(" "))
        setImageUrl(data.photo)
        console.log(data.foodType.split(" "))
      } catch (error) {
        navigate(-1);
        toast.error("Ocorreu algum erro ao buscar o prato selecionado");
      }
    };

    fetchDishData();
  }, [id, token, navigate, setValue]);


  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (isSubmitting) return null
    if (!token) return null

    console.log(data);
    const decoded = jwtDecode(token);
    console.log(data)

    try {
      const imageUrl = await uploadImage(data.image)
      console.log(imageUrl)

      if(id){
        await updateDish({
          description: data.description,
          dishName: data.name,
          foodType: data.typesOfFood.join(' '),
          photo: imageUrl,
          price: data.price.replace('.', '').replace(',', '.'),
          restaurant: {
            id: Number(decoded.sub)
          }
        }, token, id)
      }else{
        await createDish({
          description: data.description,
          dishName: data.name,
          foodType: data.typesOfFood.join(' '),
          photo: imageUrl,
          price: data.price.replace('.', '').replace(',', '.'),
          restaurant: {
            id: Number(decoded.sub)
          }
        }, token)
      }
      toast.success(id ? 'Prato alterado com sucesso!' : "Prato adicionado com sucesso!", {
        onClose: () => {
          navigate(-1)
        }
      });

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

  const formatPrice = (value: string) => {
    const numberString = value.replace(/\D/g, '');
    if (!numberString) return '';
    const number = parseFloat(numberString) / 100;
    if (number > 1000) return '1000,00'
    return `${number.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedValue = formatPrice(value);
    setValue('price', formattedValue, { shouldValidate: false });
  };

  return (
    <MainContainer>
      <HeaderMenu>
        <ButtonHeader id="button-function-menu" onClick={() => navigate(-1)}>
          <FaArrowLeftLong />
        </ButtonHeader>
        <h2>{id ? "Atualizar prato existente" : "Cadastro de novos pratos"}</h2>
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
          <Input id="input-name" placeholder="Nome" {...register("name")} error={errors.name} isTouched={touchedFields.name} />
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <TextArea id="input-description" placeholder="Descrição" {...register("description")} error={errors.description} isTouched={touchedFields.description} />
            <Input id="input-price" placeholder="Preço" {...register("price")} error={errors.price} isTouched={touchedFields.price}
              onChange={(e) => handlePriceChange(e)} />
          </div>
          <Select
            id="select-typesOfFood"
            icon={MdFastfood}
            {...register("typesOfFood")}
            error={errors.typesOfFood}
            onCustomChange={(selectedValues) => {
              setValue("typesOfFood", selectedValues)
            }}
            options={optionsSelect}
            value={selectedFoodTypes} // Aqui passamos o estado atual como valor

          />
          <Button id="button-submit" type="submit" isSubmitting={isSubmitting}>{isSubmitting ? "Enviando..." : "Salvar"}</Button>
        </OtherInputs>
      </FormContent>
      <Helmet title="Novo prato" />
    </MainContainer>
  );
};

export default NewDishes;
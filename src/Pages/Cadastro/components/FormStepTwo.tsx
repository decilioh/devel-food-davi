import { SubmitHandler, useForm } from 'react-hook-form';
import { FormDataSchemaStepTwo, schemaStepTwo } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormStepOneStyled, SpacingContents } from './Form.styles';
import { MdOutlineAccessibility } from "react-icons/md";
import { MdFastfood } from "react-icons/md";


import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';
import Select from '../../../components/common/Select';
import { handlePhoneChange } from '../../../utils';
import { FaPhoneAlt } from 'react-icons/fa';
import { optionsSelect } from '../../../utils/optionsSelect';
import { useContext, useState } from 'react';
import { SignupContext, signupProps } from '../../../context/signupContext';
import { ErrorMessage, HiddenInput, ImageUploadContainer, LabelText, UploadIcon } from '../../NewDishes/newDishes.styles';
import { CiImageOn } from 'react-icons/ci';
import { uploadImage } from '../../../hooks/firebaseStorage';

interface Props {
    setvalue: React.Dispatch<React.SetStateAction<number>>
}

const FormStepTwo = ({ setvalue }: Props) => {
    const { setUser, user } = useContext(SignupContext) as signupProps
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields, isSubmitting },
        setValue
    } = useForm<FormDataSchemaStepTwo>({
        resolver: zodResolver(schemaStepTwo)
    })

    const onSubmit: SubmitHandler<FormDataSchemaStepTwo> = async (data) => {
        if(isSubmitting) return null
        try {
            const downloadUrl = await uploadImage(data.image)
            console.log(data)
            if (!user) return null
            setUser({
                cnpj: user.cnpj,
                email: user.email,
                password: user.password,
                name: data["name"],
                phoneNumber: data["telephone"].replace(/[^\d]/g, ''),
                foodType: data["typesOfFood"].join(","),
                url: downloadUrl,
                restaurantAddress: {
                    addressLabel: user.restaurantAddress.addressLabel,
                    city: user.restaurantAddress.city,
                    neighborhood: user.restaurantAddress.neighborhood,
                    number: user.restaurantAddress.number,
                    postalCode: user.restaurantAddress.postalCode,
                    state: user.restaurantAddress.state,
                    street: user.restaurantAddress.street,
                },
            })
            setvalue(3)
        } catch (error) {
            console.error(error)
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

    return (
        <FormStepOneStyled onSubmit={handleSubmit(onSubmit)} noValidate id='form-step-two'>
            <div id="div-image" style={{ margin: "auto auto 20px auto" }}>
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
                id='input-name'
                icon={MdOutlineAccessibility}
                placeholder='Nome'
                {...register('name')}
                error={errors.name}
                isTouched={touchedFields.name}
            />
            <Input
                id='input-telephone'
                icon={FaPhoneAlt}
                placeholder='Telefone'
                {...register('telephone')}
                error={errors.telephone}
                isTouched={touchedFields.telephone}
                onChange={(e) => handlePhoneChange(e, setValue)}
            />
            <Select
                id='select-typesOfFood'
                icon={MdFastfood}
                {...register('typesOfFood')}
                error={errors.typesOfFood
                }
                onCustomChange={(selectedValues) => setValue("typesOfFood", selectedValues)}
                options={optionsSelect}
            />
            <SpacingContents style={{ marginTop: "64px" }}>
                <Button isSubmitting={isSubmitting} id="button-return-page" onClick={() => setvalue(1)}>
                    Voltar
                </Button>
                <Button id="button-submit" type="submit" isSubmitting={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Salvar"}
                </Button>
            </SpacingContents>
        </FormStepOneStyled>

    )
}

export default FormStepTwo
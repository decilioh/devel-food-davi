import { SubmitHandler, useForm } from 'react-hook-form';
import { FormDataSchemaStepTwo, schemaStepTwo } from '../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormStepOneStyled, SpacingContents } from './Form.styles';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAccessibility, MdOutlineAccessibility } from "react-icons/md";
import { MdFastfood } from "react-icons/md";


import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';
import Select from '../../../components/common/Select';
import { handlePhoneChange } from '../../../utils';
import { FaPhoneAlt } from 'react-icons/fa';

interface Props{
    setvalue: React.Dispatch<React.SetStateAction<number>>
}

const FormStepTwo = ({setvalue}: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields },
        setValue
    } = useForm<FormDataSchemaStepTwo>({
        resolver: zodResolver(schemaStepTwo)
    })

    const onSubmit: SubmitHandler<FormDataSchemaStepTwo> = (data) => {
        console.log(data)
        setvalue(3)
    };

    return (
        <FormStepOneStyled onSubmit={handleSubmit(onSubmit)} noValidate id='form-step-two'>
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
                options={[
                    { value: 'brasileira', label: 'Brasileira' },
                    { value: 'picante', label: 'Picante' },
                    { value: 'mexicana', label: 'Mexicana' },
                    { value: 'japonesa', label: 'Japonesa' },
                    { value: 'americana', label: 'Americana' },
                    { value: 'irlandesa', label: 'Irlandesa' },
                    { value: 'italiana', label: 'Italiana' },
                    { value: 'arabe', label: 'Árabe' },
                  ]}
            /> 
            <SpacingContents style={{marginTop: "64px"}}>
                <Button id="button-return-page" onClick={() => setvalue(1)}>
                    Voltar
                </Button>
                <Button id="button-submit" type="submit">
                    Continuar
                </Button>
            </SpacingContents>
        </FormStepOneStyled>

    )
}

export default FormStepTwo
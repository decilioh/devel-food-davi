import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import FormAddress, { FormEndereco } from './components/FormEndereco'
import FormPersonInfos, { FormInfosPessoais } from './components/FormInfosPessoais'
import Button from '../../components/common/Button'
import { useNavigate } from 'react-router-dom'
import { ContainerAction, ContainerForm, LeftData, MainContainer, RightData } from './Perfil.styles'
import { Helmet } from 'react-helmet-async'
import { getRestaurantById, IRestaurantGet } from '../../services/restaurant/getRestaurant'
import { AuthContext, IAuthContextFunctions } from '../../context/authContext'
import { jwtDecode } from 'jwt-decode'
import Loader from '../../components/common/Loader'
import { ThemeContext } from '../../context/themeContext'
import { uploadImage } from '../../hooks/firebaseStorage'
import { updateRestaurant } from '../../services/restaurant/updateRestaurant'
import { toast } from 'react-toastify'



const Profile = () => {
    const { token } = useContext(AuthContext) as IAuthContextFunctions
    const submitPersonInfosRef = useRef<(() => Promise<any>) | null>(null);
    const submitAddressRef = useRef<(() => Promise<any>) | null>(null);
    const navigate = useNavigate()
    const [data, setData] = useState<IRestaurantGet | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const theme = useContext(ThemeContext)

    if (!token) return null;

    useEffect(() => {
        const fetchRestaurant = async () => {
            if (token) {
                try {
                    const decoded = jwtDecode(token);
                    if (!decoded.sub) return null;
                    setData(await getRestaurantById(token, decoded.sub))
                    setIsLoading(false)
                } catch (error) {

                }
            }
        }
        fetchRestaurant()
    }, [token])

    const handleSubmit = async () => {
        try {
            setIsLoading(true)
            // Submete ambos os formulários e aguarda seus dados
            const personInfosData: FormInfosPessoais = submitPersonInfosRef.current ? await submitPersonInfosRef.current() : {};
            const addressData: FormEndereco = submitAddressRef.current ? await submitAddressRef.current() : {};

            console.log(personInfosData);
            console.log(addressData);
            const decoded = jwtDecode(token);
            if (!decoded.sub) return null
            if(!data)return null
            const id = decoded.sub


            if (typeof personInfosData.image !== "string") {
                const imageUrl = await uploadImage(personInfosData.image)
                const restaurant: IRestaurantGet = {
                    cnpj: data.cnpj,
                    email: data.email,
                    foodType: personInfosData.typesOfFood.join(","),
                    name: personInfosData.name,
                    photo: imageUrl,
                    password: data.password,
                    phoneNumber: personInfosData.phoneNumber,
                    restaurantAddress: {
                        addressLabel: addressData.nicknameAddress,
                        postalCode: addressData.cep.replace("-", ""),
                        city: addressData.city,
                        neighborhood: addressData.neighborhood,
                        number: addressData.number,
                        state: addressData.state,
                        street: addressData.road
                    }
                };
                await updateRestaurant(token, id, restaurant)
            } else {
                const restaurant: IRestaurantGet = {
                    cnpj: data.cnpj,
                    email: data.email,
                    foodType: personInfosData.typesOfFood.join(","),
                    name: personInfosData.name,
                    photo: personInfosData.image,
                    password: data.password,
                    phoneNumber: personInfosData.phoneNumber,
                    restaurantAddress: {
                        addressLabel: addressData.nicknameAddress,
                        postalCode: addressData.cep.replace("-", ""),
                        city: addressData.city,
                        neighborhood: addressData.neighborhood,
                        number: addressData.number,
                        state: addressData.state,
                        street: addressData.road
                    }
                };
                await updateRestaurant(token, id, restaurant)
            }
            setIsLoading(false)
            toast.success('Perfil atualizado com sucesso!', {
                onClose: () => {
                    navigate(-1)
                }
            });
        } catch (error) {
            setIsLoading(false)
            console.log(error)
            toast.error('Ocorreu um erro ao atualizar o perfil', {
                onClose: () => {
                    navigate(-1)
                }
            });
        }
    };




    if (isLoading) {
        return <Loader theme={theme} />
    }

    return (
        <MainContainer>
            <ContainerForm>
                <LeftData>
                    <h2>Informações Pessoais</h2>
                    <FormPersonInfos
                        data={data}
                        onSubmitRef={submitPersonInfosRef}
                    />
                </LeftData>
                <RightData>
                    <h2>Endereço</h2>
                    <FormAddress
                        data={data}
                        onSubmitRef={submitAddressRef}
                    />
                </RightData>
            </ContainerForm>
            <ContainerAction>
                <hr />
                <Button id='button-change-password' style={{ marginTop: "1.2rem", marginBottom: "14px" }} onClick={() => navigate("/perfil/trocar-senha")}>Alterar senha</Button>
                <Button id='button-save-changes' onClick={handleSubmit}>Salvar</Button>
            </ContainerAction>
            <Helmet title="Perfil" />
        </MainContainer>
    )
}

export default Profile
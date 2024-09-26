import React, { useRef } from 'react'
import styled from 'styled-components'
import FormAddress from './components/FormEndereco'
import FormPersonInfos from './components/FormInfosPessoais'
import Button from '../../components/common/Button'
import { useNavigate } from 'react-router-dom'
import { ContainerAction, ContainerForm, LeftData, MainContainer, RightData } from './Perfil.styles'
import { Helmet } from 'react-helmet-async'



const Profile = () => {
    const submitPersonInfosRef = useRef<(() => Promise<any>) | null>(null);
    const submitAddressRef = useRef<(() => Promise<any>) | null>(null);
    const navigate = useNavigate()

    const handleSubmit = async () => {
        try {
            // Submete ambos os formulários e aguarda seus dados
            const personInfosData = submitPersonInfosRef.current ? await submitPersonInfosRef.current() : {};
            const addressData = submitAddressRef.current ? await submitAddressRef.current() : {};

            console.log('Person Infos Data:', personInfosData);
            console.log('Address Data:', addressData);

            // Unifica os dados dos dois formulários
            const combinedData = {
                ...personInfosData,
                ...addressData,
            };

            console.log('Combined Data:', combinedData);
        } catch (error) {
            console.error('Erro ao submeter os formulários', error);
        }
    };



    return (
        <MainContainer>
            <ContainerForm>
                <LeftData>
                    <h2>Informações Pessoais</h2>
                    <FormPersonInfos onSubmitRef={submitPersonInfosRef} />
                </LeftData>
                <RightData>
                    <h2>Endereço</h2>
                    <FormAddress onSubmitRef={submitAddressRef} />
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
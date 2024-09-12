import React, { useRef } from 'react'
import styled from 'styled-components'
import FormAddress from './components/FormEndereco'
import FormPersonInfos from './components/FormInfosPessoais'
import Button from '../../components/common/Button'
import { useNavigate } from 'react-router-dom'

export const MainContainer = styled.main`
    width: 100%;
    padding: 1.25rem;
    margin: 0;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1025px){
        width: 100%;
        flex-direction: column;
        padding: 0;
    }

    h2{
        /* Roboto - title */
        font-family: 'Roboto Condensed';
        font-style: normal;
        font-weight: 500;
        font-size: 48px;
        line-height: 56px;
        text-align: center;
        margin-bottom: 3.8125rem;

        color: ${({ theme }) => theme.text};
    }
`

export const ContainerForm = styled.section`
    display: flex;
    margin: auto;
    @media screen and (max-width: 1100px){
        width: 100%;
        flex-direction: column;
    }
`

export const ContainerAction = styled.section`
    width: 100%;
    margin-top: 1.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    button{
        margin: 3.9375rem 0 0 0;
    }

    hr {
        width: 1400px; /* Ajusta a largura da linha horizontal */
        border: 0;
        border-top: 1px solid rgba(162, 162, 162, 1); /* Adiciona a borda superior para a linha horizontal */
        margin: 0; /* Remove margens, se necessário */
        
    }
`

export const LeftData = styled.article`
    padding-right: 6.6875rem;
    position: relative; /* Necessário para o posicionamento do pseudo-elemento */
  
    &::after {
        content: "";
        position: absolute;
        top: 2%; /* Ajuste para aumentar a altura acima */
        bottom: 10%; /* Ajuste para aumentar a altura abaixo */
        right: 0;
        width: 1px; /* Largura da borda */
        background-color: rgba(162, 162, 162, 1); /* Cor da borda */
        @media screen and (max-width: 1100px){
            display: none;
        }
    }

    form{
        width: 428px;
        @media screen and (max-width: 1100px){
            margin: auto;
        }
    }

    @media screen and (max-width: 1100px){
        padding: 0;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        button{
            margin: 0 0 0;
        }
    }
`

export const RightData = styled.article`
    margin-left: 7.125rem;
    @media screen and (max-width: 1100px){
        padding: 0;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        button{
            margin: 0 0 0;
        }
    }
`


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
                    <h2>Informações pessoais</h2>
                    <FormPersonInfos onSubmitRef={submitPersonInfosRef} />
                    <Button id='button-change-password' style={{ marginTop: "1.75rem" }} onClick={() => navigate("/perfil/trocar-senha")}>Alterar senha</Button>
                </LeftData>
                <RightData>
                    <h2>Endereço</h2>
                    <FormAddress onSubmitRef={submitAddressRef} />
                </RightData>
            </ContainerForm>
            <ContainerAction>
                <hr />
                <Button id='button-save-changes' onClick={handleSubmit}>Salvar</Button>
            </ContainerAction>
        </MainContainer>
    )
}

export default Profile
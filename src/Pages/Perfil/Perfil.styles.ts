import styled from "styled-components";

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
        font-family: 'Roboto Condensed';
        font-style: normal;
        font-weight: 500;
        font-size: 48px;
        line-height: 56px;
        text-align: center;
        margin-bottom: 3.8125rem;
        color: ${({ theme }) => theme.text};
    }

    @media (max-height: 1000px) {
        margin-top: 20vh;
    }
`;

export const ContainerForm = styled.section`
    display: flex;
    margin: auto;
    @media screen and (max-width: 1100px){
        flex-direction: column;
        align-items: center; /* Centraliza os inputs */
    }
`;

export const ContainerAction = styled.section`
    width: 100%;
    margin-top: 1.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    button{
        width: 100%; /* Deixa o botão com 100% da largura disponível */
        max-width: 400px; /* Limita a largura máxima */
    }

    hr {
        width: 100%; /* Ajusta a linha horizontal para 100% da largura */
        max-width: 1400px; /* Define um limite de largura máxima */
        border: 0;
        border-top: 1px solid rgba(162, 162, 162, 1);
        margin: 0;
    }
`;

export const LeftData = styled.article`
    padding-right: 6.6875rem;
    position: relative; 
  
    &::after {
        content: "";
        position: absolute;
        top: 2%;
        bottom: 10%;
        right: 0;
        width: 1px;
        background-color: rgba(162, 162, 162, 1);
        @media screen and (max-width: 1100px){
            display: none;
        }
    }

    form{
        width: 100%;
        max-width: 428px;
        @media screen and (max-width: 1100px){
            margin:0 auto;
        }
    }

    @media screen and (max-width: 1100px){
        padding: 0;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2{
            margin: 20vh auto 4rem auto;

        }

        button{
            margin: 0;
        }

        input {
            width: 100%; /* Faz os inputs ocuparem toda a largura disponível */
        }
    }
`;

export const RightData = styled.article`
    margin-left: 7.125rem;
    @media screen and (max-width: 1100px){
        padding: 0;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        input, button{
            width: 100%; /* Faz os inputs e o botão ocuparem toda a largura disponível */
        }

        button{
            margin: 0;
            max-width: 400px; /* Limita a largura máxima do botão */
        }
    }
`;

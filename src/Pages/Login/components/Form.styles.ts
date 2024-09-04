import styled from "styled-components";

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    width: 76.53%;
    margin: 1.44rem auto 6.19rem auto;
    .margin-bottom{
        margin-bottom: 0.8125rem;
    }

    @media screen and (max-height: 811px){
        margin-bottom: 0.625rem;
        #botao-submit{
            margin-top: 2rem;
        }
    }
    @media screen and (max-width: 1024px) {
        width: 30vw;
    }


    @media screen and (max-width: 780px) {
       width: 70vw;
       margin: 0 auto 0 auto;
    }
`

export const ButtonApp = styled.button`
        width: 100%;
        height: 62px;
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.buttonText};
        border-radius: 0.625rem;
        border: none;
        cursor: pointer;
        margin-top: 2.88rem;
        
        /* Text button */
        font-size: 2rem;
        font-family: Roboto Condensed;
        font-weight: 500;
        text-align: center;


        @media screen and (max-width: 1024px) {
            width: 30vw;
        }

        @media screen and (max-width: 780px) {
        width: 70vw;
        }
    `
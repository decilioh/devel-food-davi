import styled from "styled-components";

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    width: 76.53%;
    margin: 23px auto 99px auto;
    .margin-bottom{
        margin-bottom: 13px;
    }

    @media screen and (max-height: 811px){
        margin-bottom: 10px;
        #botao-submit{
            margin-top: 32px;
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
        border-radius: 10px;
        border: none;
        cursor: pointer;
        margin-top: 46px;
        
        /* Text button */
        font-size: 32px;
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
import styled from "styled-components";

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 80%;
    margin: 31px auto 99px auto;
    .margin-bottom{
        margin-bottom: 13px;
    }
    #botao-submit{
        margin-top: 52px;
    }
    @media screen and (max-height: 811px){
        margin-bottom: 10px
    }
    @media screen and (max-width: 1024px) {
        width: 30vw;
    }

    @media screen and (max-width: 780px) {
        width: 40vw;
    }

    @media screen and (max-width: 610px) {
       width: 70vw;
    }
`
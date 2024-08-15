import styled from "styled-components";

export const FormForgotPassword = styled.form`
    display: flex;
    flex-direction: column;
    width: 20vw;
    margin: 5vh auto 2vh auto;

    @media screen and (max-width: 1024px) {
        width: 30vw;
    }

    @media screen and (max-width: 780px) {
        width: 40vw;
    }

    @media screen and (max-width: 610px) {
       width: 70vw;
    }
`;

export const FormValidation = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
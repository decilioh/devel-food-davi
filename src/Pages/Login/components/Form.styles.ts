import styled from "styled-components";

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    width: 20vw;
    margin: 5vh auto 8vh auto;



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
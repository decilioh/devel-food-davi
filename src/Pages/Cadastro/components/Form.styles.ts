import styled from "styled-components";

export const FormStepOneStyled = styled.form`
    display: flex;
    flex-direction: column;
    margin: 5vh auto 2vh auto;
    width: 25vw;

    @media screen and (max-width: 1024px) {
        width: 30vw;
    }

    @media screen and (max-width: 780px) {
        width: 40vw;
    }

    @media screen and (max-width: 610px) {
       width: 77vw;
    }

    #button-register{
        margin-top: 5vh;
    }
`;

export const FormDivisionOne = styled.div`
    display: flex;
    gap: 8px;
    width: 100%;
    flex-wrap: no-wrap;

    .esquerda{
        width: 60%;
        input{
            width: 60%;
        }
    }
    .direita{
        input{
            width: 40%;
        }
        width: 40%;
    }
    .esquerda2{
        width: 70%;
        input{
            width: 70%;
        }
    }
    .direita2{
        input{
            width: 30%;
        }
        width: 30%;
    }
`;

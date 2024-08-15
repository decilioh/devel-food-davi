import styled from "styled-components";

export const FormStepOneStyled = styled.form`
    display: flex;
    flex-direction: column;
    margin: 5vh auto 2vh auto;

    @media screen and (max-width: 1024px) {
        width: 30vw;
    }

    @media screen and (max-width: 780px) {
        width: 40vw;
    }

    @media screen and (max-width: 610px) {
       width: 77vw;
    }
`;

export const FormDivisionOne = styled.div`
    display: flex;
    gap: 4px;


    @media screen and (max-width: 1024px) {
        input{
            width: 9vw;
        }
    }

    @media screen and (max-width: 780px) {
        input{
            width: 14vw;
        }
    }

    @media screen and (max-width: 610px) {
        input{
            width: 34vw;
        }
    }

    #input-cadastro-cep, #input-cadastro-numero{
        @media screen and (max-width: 1024px) {
            width: 8vw;
        }

        @media screen and (max-width: 780px) {
            width: 9vw;
        }
        @media screen and (max-width: 610px) {
            width: 12vw;
        }
    }
`

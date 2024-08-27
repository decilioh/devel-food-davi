import styled from "styled-components";

export const FormStepOneStyled = styled.form`
    display: flex;
    flex-direction: column;
    margin: 5vh auto 2vh auto;
    max-width: 558px;
    width: 100%;

    @media screen and (max-width: 600px) {
        width: 90%;
    }

    #button-register{
        margin: 5vh auto;
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

export const SpacingContents = styled.div`
    
    max-width: 558px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    button{
        width: 100%;
        max-width: 259px;
        height: 62px;
        border-radius: 10px;
    }
` 
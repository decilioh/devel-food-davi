import styled from "styled-components";

export const FormForgotPassword = styled.form`
    display: flex;
    flex-direction: column;
    width: 20vw;
    margin: 5vh auto 2vh auto;
    max-width: 558px;
    width: 100%;
    gap: 12px;

    @media screen and (max-width: 600px){
        width: 90%;
    }
`;

export const FormForgotPasswordEmail = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 558px;
    width: 100%;
    margin: 5vh auto 2vh auto;
    gap: 71px;
    @media screen and (max-width: 600px){
        width: 90%;
    }
`;


export const FormValidation = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    button{
        margin-top: 56px;
    }
`

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

export const SpacingContentsStepThree = styled.div`
    margin-top: 23px;
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
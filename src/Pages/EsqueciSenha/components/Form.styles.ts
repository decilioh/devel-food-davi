import styled from "styled-components";

export const FormForgotPassword = styled.form`
    display: flex;
    flex-direction: column;
    width: 20vw;
    margin: 2px auto 2vh auto;
    max-width: 558px;
    width: 100%;
    gap: 6px;

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
    gap: 32px;
    @media screen and (max-width: 600px){
        width: 90%;
    }
`;


export const FormValidation = styled.form`
    max-width: 558px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;

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
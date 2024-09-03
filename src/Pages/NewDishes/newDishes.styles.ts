import { FieldError } from "react-hook-form";
import styled from "styled-components";
import { ButtonApp } from "../../components/common/Button/button.styles";

export const MainContainer = styled.main`
    width: 100%;
    margin: 70px 390px auto auto;
    height: calc(100vh - 150px);
    display: flex;
    flex-direction: column;
    align-items: start;
    overflow-x: hidden;
    @media screen and (max-width: 1180px){
        margin: auto;
    }

`

export const HeaderMenu = styled.section`
    width: 950px;
    margin: 0 auto 0 0;
    display: flex;
    justify-content: space-between;
    h2{
        /* Menu do restaurante */
        font-family: 'Roboto Condensed';
        font-style: normal;
        font-weight: 500;
        font-size: 48px;
        line-height: 56px;
        margin: 0;

        color: ${({ theme }) => theme.primary};
        @media screen and (max-width: 1180px){
            text-align: center;
        }
    }

    @media screen and (max-width: 1180px){
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        margin: auto auto 30px auto;
    }

`

export const ButtonHeader = styled(ButtonApp)`
    max-width: 73px;
    height: 51px;
    font-size: 2rem;
    margin: 0;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 20px;
    svg{
        width: 51px;
        height: 51px;
    }
`

export const FormContent = styled.form`
    max-width: 950px;
    width: 100%;
    margin: 69px auto auto 125px;
    display: flex;
    overflow-y: auto;
    overflow-x: hidden;
    label{
      margin-right: 89px;
    }

    @media screen and (max-width: 1180px){
      flex-direction: column;
      width: 80%;
      margin: auto;
      text-align: center;
      label{
        margin: auto;
        margin-bottom: 30px;
      }
      button{
        margin: auto;
      }
    }
`

export const ImageUploadContainer = styled.div<{ imageUrl?: string, errorBorder?: FieldError }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 271px;
  height: 271px;
  background-color: #d9d9d9;
  border-radius: 24px;
  border: ${({ errorBorder }) => (errorBorder ? "1px solid #FF6347" : "none")};
  cursor: pointer;
  text-align: center;
  background-image: ${({ imageUrl }) => (imageUrl ? `url(${imageUrl})` : "none")};
  background-size: cover;
  background-position: center;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const UploadIcon = styled.div`
  color: #383838;
  font-size: 64px;
  svg {
    width: 64px;
    height: 64px;
  }
`;

export const LabelText = styled.p`
  font-size: 18px;
  color: #383838;
  margin-top: 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
`;

export const OtherInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;
  textarea {
    width: 361px;
    height: 179px;
  }
`;

export const ErrorMessage = styled.span`
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.error};
  font-size: 14px;
  text-align: center;
  width: 100%;
`;
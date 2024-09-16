import { FieldError } from "react-hook-form";
import styled from "styled-components";
import { ButtonApp } from "../../components/common/Button/button.styles";

export const MainContainer = styled.main`
    width: 100%;
    margin: 4.38rem 24.38rem auto auto;
    height: calc(100vh - 150px);
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    @media screen and (max-width: 1180px){
        margin: auto;
    }

`

export const HeaderMenu = styled.section`
    width: 950px;
    margin: 0 auto ;
    display: flex;
    justify-content: space-between;
    h2{
        /* Menu do restaurante */
        font-family: 'Roboto Condensed';
        font-style: normal;
        font-weight: 500;
        font-size: 3rem;
        line-height: 3.5rem;
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
        gap: 1.88rem;
        margin: auto auto 1.88rem auto;
    }

`

export const ButtonHeader = styled(ButtonApp)`
    max-width: 73px;
    height: 3.19rem;
    font-size: 2rem;
    margin: 0;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 1.25rem;
    svg{
        width: 3.19rem;
        height: 3.19rem;
    }
`

export const FormContent = styled.form`
    max-width: 950px;
    width: 100%;
    margin: 4.31rem auto auto auto;
    display: flex;
    justify-content: center;
    overflow-y: auto;
    overflow-x: hidden;
    #div-image{
      margin-right: 5.56rem;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    @media screen and (max-width: 1180px){
      flex-direction: column;
      width: 80%;
      margin: auto;
      text-align: center;
      #div-image{
        margin: auto;
        margin-bottom: 1.88rem;
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
  border-radius: 1.5rem;
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
  font-size: 4rem;
  svg {
    width: 4rem;
    height: 4rem;
  }
`;

export const LabelText = styled.p`
  font-size: 1.13rem;
  color: #383838;
  margin-top: 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  line-height: 1.81rem;
  text-align: center;
`;

export const OtherInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.81rem;
  #input-description {
    width: 361px;
    height: 179px;
  }
`;

export const ErrorMessage = styled.span`
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.error};
  font-size: 1rem;
  text-align: center;
  width: 100%;
`;
import styled from "styled-components";
import { ButtonApp } from "../../components/common/Button/button.styles";

export const MainContainer = styled.main`
    max-width: 1426px;
    width: 100%;
    margin: auto;
    height: calc(100vh - 150px);
    display: flex;
    flex-direction: column;
    align-items: start;

    @media screen and (max-width: 1700px){
        margin: auto;
    }

`

export const HeaderMenu = styled.section`
    width: 1426px;
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-top: 1.2rem;
    margin-bottom: 79px;
    h2{
        /* Menu do restaurante */
        font-family: 'Roboto Condensed';
        font-style: normal;
        font-weight: 500;
        font-size: 3rem;
        line-height: 3.5rem;
        margin: 0;

        color: ${({ theme }) => theme.primary};
        @media screen and (max-width: 1700px){
            text-align: center;
        }
    }

    @media screen and (max-width: 1700px){
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.88rem;
    }

`

export const ButtonHeader = styled(ButtonApp)`
    max-width: 215px;
    height: 3.94rem;
    font-size: 2rem;
    margin: 0;
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 0 0.5rem;
  background-color: #fff;
  width: 311px;
  height: 3.5rem;
`;

export const Input = styled.input`
    width: 80%;
    border: none;
    padding: 0.5rem 0.25rem;
    font-size: 1rem;
    color: #666;
    outline: none;
    font-size: 1.13rem;

  &::placeholder {
    color: #999;
  }
`;

export const Divider = styled.div`
  height: 100%;
  width: 1px;
  background-color: #ccc;
  margin: 0 0.5rem;
`;

export const SearchIcon = styled.img`
  color: #666;
  width: 1.56rem;
  height: 1.56rem;
  cursor: pointer;
  margin: auto;
`;

export const SectionMenuOptions = styled.section`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    width: 1279px;
    gap: 4.06rem;
    justify-content: center;
    margin: auto;
    
    @media screen and (max-width: 1700px){
        width: auto;
        margin: auto;
        gap: 1.88rem;
    }

`

export const SectionMenuOptionsCard = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 271px;
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 1.13rem;
        line-height: 21px;
        text-align: center;
        margin-top: 15px;

    }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 271px;
`;

export const ImageCard = styled.img`
  width: 271px;
  height: 271px;
  border-radius: 24px;
  background-size: cover;
  background-position: center;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 1.56rem;
  left: 0.625rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const IconButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 50%;
  width: 3.63rem;
  height: 3.63rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  svg {
    color: ${({ color }) => color};
    width: 1.88rem;
    height: 1.88rem;
  }
`;

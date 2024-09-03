import styled from "styled-components";
import { ButtonApp } from "../../components/common/Button/button.styles";

export const MainContainer = styled.main`
    max-width: 1279px;
    margin: auto auto auto 35px;
    height: calc(100vh - 150px);
    display: flex;
    flex-direction: column;
    align-items: start;

    @media screen and (max-width: 1180px){
        margin: auto;
    }

`

export const HeaderMenu = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-top: 40px;
    margin-bottom: 86px;
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
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

`

export const ButtonHeader = styled(ButtonApp)`
    max-width: 215px;
    height: 63px;
    font-size: 2rem;
    margin: 0;
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0 8px;
  background-color: #fff;
  width: 311px;
  height: 56px;
`;

export const Input = styled.input`
    width: 80%;
    border: none;
    padding: 8px 4px;
    font-size: 16px;
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
  margin: 0 8px;
`;

export const SearchIcon = styled.img`
  color: #666;
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin: auto;
`;

export const SectionMenuOptions = styled.section`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    width: calc(100% + 30px);
    gap: 65px;
    height: auto;
    overflow-y: auto;
    
    @media screen and (max-width: 1180px){
        justify-content: center;
        gap: 30px;
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
  width: 100%;
  height: auto;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const IconButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 50%;
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  svg {
    color: ${({ color }) => color};
    width: 30px;
    height: 30px;
  }
`;

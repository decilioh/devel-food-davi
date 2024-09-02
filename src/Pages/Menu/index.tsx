import React from 'react'
import styled from 'styled-components'
import FotoExemplo from "../../assets/images/fotoPratoExemplo.png"
import { ButtonApp } from '../Login/components/Form.styles'
import { FiSearch } from "react-icons/fi";
import { IoTrashSharp } from "react-icons/io5";
import { LuPencilLine } from "react-icons/lu";



export const MainContainer = styled.main`
    max-width: 1279px;
    margin: auto;
    height: calc(100vh - 150px);
    display: flex;
    flex-direction: column;
    align-items: start;
`

export const HeaderMenu = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 86px;
    h2{
        /* Menu do restaurante */
        font-family: 'Roboto Condensed';
        font-style: normal;
        font-weight: 500;
        font-size: 48px;
        line-height: 56px;
        text-align: center;

        color: ${({ theme }) => theme.primary};
    }

`

export const ButtonHeader = styled(ButtonApp)`
    max-width: 215px;
    height: 63px;
    font-size: 2rem;
    margin: 0;
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0 8px;
  background-color: #fff;
  width: 311px;
  height: 56px;
`;

const Input = styled.input`
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

const Divider = styled.div`
  height: 100%;
  width: 1px;
  background-color: #ccc;
  margin: 0 8px;
`;

const SearchIcon = styled(FiSearch)`
  color: #666;
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin: auto;
`;

const SectionMenuOptions = styled.section`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 65px;
    height: auto;
    overflow-y: visible;
`

const SectionMenuOptionsCard = styled.article`
    display: flex;
    flex-direction: column;
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

const ImageContainer = styled.div`
  position: relative;
  width: 271px;
`;

const ImageCard = styled.img`
  width: 100%;
  height: auto;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const IconButton = styled.button`
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

const Menu = () => {
    return (
        <MainContainer>
            <HeaderMenu>
                <ButtonHeader id='button-function'>Novo Prato +</ButtonHeader>
                <h2>Menu do restaurante</h2>
                <InputWrapper>
                    <Input placeholder="Nome do prato" />
                    <Divider />
                    <SearchIcon />
                </InputWrapper>
            </HeaderMenu>
            <SectionMenuOptions>
                <SectionMenuOptionsCard>
                    <ImageContainer>
                        <ImageCard src={FotoExemplo} />
                        <ButtonContainer>
                            <IconButton color="#006307">
                                <LuPencilLine />
                            </IconButton>
                            <IconButton color="#b70000">
                                <IoTrashSharp />
                            </IconButton>
                        </ButtonContainer>
                    </ImageContainer>
                    <p>Strogonoff de frango</p>
                </SectionMenuOptionsCard>
                <SectionMenuOptionsCard>
                    <ImageContainer>
                        <ImageCard src={FotoExemplo} />
                        <ButtonContainer>
                            <IconButton color="#006307">
                                <LuPencilLine />
                            </IconButton>
                            <IconButton color="#b70000">
                                <IoTrashSharp />
                            </IconButton>
                        </ButtonContainer>
                    </ImageContainer>
                    <p>Strogonoff de frango</p>
                </SectionMenuOptionsCard>
                <SectionMenuOptionsCard>
                    <ImageContainer>
                        <ImageCard src={FotoExemplo} />
                        <ButtonContainer>
                            <IconButton color="#006307">
                                <LuPencilLine />
                            </IconButton>
                            <IconButton color="#b70000">
                                <IoTrashSharp />
                            </IconButton>
                        </ButtonContainer>
                    </ImageContainer>
                    <p>Strogonoff de frango</p>
                </SectionMenuOptionsCard>
                <SectionMenuOptionsCard>
                    <ImageContainer>
                        <ImageCard src={FotoExemplo} />
                        <ButtonContainer>
                            <IconButton color="#006307">
                                <LuPencilLine />
                            </IconButton>
                            <IconButton color="#b70000">
                                <IoTrashSharp />
                            </IconButton>
                        </ButtonContainer>
                    </ImageContainer>
                    <p>Strogonoff de frango</p>
                </SectionMenuOptionsCard>
                <SectionMenuOptionsCard>
                    <ImageContainer>
                        <ImageCard src={FotoExemplo} />
                        <ButtonContainer>
                            <IconButton color="#006307">
                                <LuPencilLine />
                            </IconButton>
                            <IconButton color="#b70000">
                                <IoTrashSharp />
                            </IconButton>
                        </ButtonContainer>
                    </ImageContainer>
                    <p>Strogonoff de frango</p>
                </SectionMenuOptionsCard>
                <SectionMenuOptionsCard>
                    <ImageContainer>
                        <ImageCard src={FotoExemplo} />
                        <ButtonContainer>
                            <IconButton color="#006307">
                                <LuPencilLine />
                            </IconButton>
                            <IconButton color="#b70000">
                                <IoTrashSharp />
                            </IconButton>
                        </ButtonContainer>
                    </ImageContainer>
                    <p>Strogonoff de frango</p>
                </SectionMenuOptionsCard>
                <SectionMenuOptionsCard>
                    <ImageContainer>
                        <ImageCard src={FotoExemplo} />
                        <ButtonContainer>
                            <IconButton color="#006307">
                                <LuPencilLine />
                            </IconButton>
                            <IconButton color="#b70000">
                                <IoTrashSharp />
                            </IconButton>
                        </ButtonContainer>
                    </ImageContainer>
                    <p>Strogonoff de frango</p>
                </SectionMenuOptionsCard>
                <SectionMenuOptionsCard>
                    <ImageContainer>
                        <ImageCard src={FotoExemplo} />
                        <ButtonContainer>
                            <IconButton color="#006307">
                                <LuPencilLine />
                            </IconButton>
                            <IconButton color="#b70000">
                                <IoTrashSharp />
                            </IconButton>
                        </ButtonContainer>
                    </ImageContainer>
                    <p>Strogonoff de frango</p>
                </SectionMenuOptionsCard>
            </SectionMenuOptions>
        </MainContainer>
    )
}

export default Menu
import FotoExemplo from "../../assets/images/fotoPratoExemplo.png"
import { IoTrashSharp } from "react-icons/io5";
import { LuPencilLine } from "react-icons/lu";
import Lupa from "../../assets/images/lupa.svg"
import { ButtonContainer, ButtonHeader, Divider, HeaderMenu, IconButton, ImageCard, ImageContainer, Input, InputWrapper, MainContainer, SearchIcon, SectionMenuOptions, SectionMenuOptionsCard } from './Menu.styles';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ModalContext, ModalContextProps } from "../../context/modalContext";




const Menu = () => {
    const navigate = useNavigate()
    const {openModal, isOpen} = useContext(ModalContext) as ModalContextProps
    console.log(isOpen)
    return (
        <MainContainer>
            <HeaderMenu>
                <ButtonHeader id='button-function-menu' onClick={() => navigate("novo-prato")}>Novo Prato +</ButtonHeader>
                <h2>Menu do restaurante</h2>
                <InputWrapper>
                    <Input placeholder="Nome do prato" id='input-button-menu'/>
                    <Divider />
                    <SearchIcon src={Lupa}/>
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
                            <IconButton color="#b70000" onClick={openModal}>
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
                            <IconButton color="#b70000" onClick={openModal}>
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
                            <IconButton color="#b70000" onClick={openModal}>

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
                            <IconButton color="#b70000" onClick={openModal}>

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
                            <IconButton color="#b70000" onClick={openModal}>

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
                            <IconButton color="#b70000" onClick={openModal}>

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
                            <IconButton color="#b70000" onClick={openModal}>

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
                            <IconButton color="#b70000" onClick={openModal}>

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
                            <IconButton color="#b70000" onClick={openModal}>

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
                            <IconButton color="#b70000" onClick={openModal}>

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
                            <IconButton color="#b70000" onClick={openModal}>

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
                            <IconButton color="#b70000" onClick={openModal}>

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
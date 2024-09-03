
import Lupa from "../../assets/images/lupa.svg"
import { ButtonContainer, ButtonHeader, Divider, HeaderMenu, IconButton, ImageCard, ImageContainer, Input, InputWrapper, MainContainer, SearchIcon, SectionMenuOptions, SectionMenuOptionsCard } from './Menu.styles';
import { useNavigate } from "react-router-dom";

import { ModalContext, ModalContextProps } from "../../context/modalContext";
import Card from "./components/Card";




const Menu = () => {
    const navigate = useNavigate()
    const items = Array.from({ length: 16 }, (_, index) => index + 1);
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
                {items.map(index => (
                    <Card key={index}/>
                ))}
            </SectionMenuOptions>
        </MainContainer>
    )
}

export default Menu

import Lupa from "../../assets/images/lupa.svg"
import { ButtonContainer, ButtonHeader, Divider, HeaderMenu, IconButton, ImageCard, ImageContainer, Input, InputWrapper, MainContainer, SearchIcon, SectionMenuOptions, SectionMenuOptionsCard } from './Menu.styles';
import { useNavigate } from "react-router-dom";

import { ModalContext, ModalContextProps } from "../../context/modalContext";
import Card from "./components/Card";
import { mockDishes } from "../../mocks/dishes";
import { Helmet } from "react-helmet-async";




const Menu = () => {
    const navigate = useNavigate()
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
                {mockDishes.map((item, index) => (
                    <Card nome={item.prato} key={index}/>
                ))}
            </SectionMenuOptions>
            <Helmet title="Menu" />
        </MainContainer>
    )
}

export default Menu
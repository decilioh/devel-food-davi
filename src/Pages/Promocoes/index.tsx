
import Lupa from "../../assets/images/lupa.svg"
import { ButtonContainer, ButtonHeader, Divider, HeaderMenu, IconButton, ImageCard, ImageContainer, Input, InputWrapper, MainContainer, SearchIcon, SectionMenuOptions, SectionMenuOptionsCard } from './Promotions.styles';
import { useNavigate } from "react-router-dom";

import { ModalContext, ModalContextProps } from "../../context/modalContext";
import Card from "./components/Card";
import { mockDishes } from "../../mocks/dishes";
import { mockPromotions } from "../../mocks/promotions";
import { Helmet } from "react-helmet-async";




const Promotions = () => {
    const navigate = useNavigate()
    return (
        <MainContainer>
            <HeaderMenu>
                <ButtonHeader id='button-function-menu' onClick={() => navigate("nova-promocao")} style={{maxWidth: "340px"}}>Nova promoção</ButtonHeader>
                <h2>Suas promoções</h2>
                <InputWrapper>
                    <Input placeholder="Nome da promoção" id='input-button-menu'/>
                    <Divider />
                    <SearchIcon src={Lupa}/>
                </InputWrapper>
            </HeaderMenu>
            <SectionMenuOptions>
                {mockPromotions.map((item, index) => (
                    <Card nome={item.nomePromocao} key={index}/>
                ))}
            </SectionMenuOptions>
            <Helmet title="Promoções" />
        </MainContainer>
    )
}

export default Promotions
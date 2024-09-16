
import Lupa from "../../assets/images/lupa.svg"
import { ButtonContainer, ButtonHeader, Divider, HeaderMenu, IconButton, ImageCard, ImageContainer, Input, InputWrapper, MainContainer, SearchIcon, SectionMenuOptions, SectionMenuOptionsCard } from './Promotions.styles';
import { useNavigate } from "react-router-dom";

import { ModalContext, ModalContextProps } from "../../context/modalContext";
import Card from "./components/Card";
import { mockDishes } from "../../mocks/dishes";
import { mockPromotions } from "../../mocks/promotions";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Pagination } from "../Home";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



const ITEMS_PER_PAGE = 8;

const Promotions = () => {
    // State to track pagination
    const [currentPage, setCurrentPage] = useState(0);

    // Total pages based on the number of dishes
    const totalPages = Math.ceil(mockPromotions.length / ITEMS_PER_PAGE);

    // Handle next page
    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    // Handle previous page
    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    // Get the dishes to display on the current page
    const paginatedDishes = mockPromotions.slice(
        currentPage * ITEMS_PER_PAGE,
        (currentPage + 1) * ITEMS_PER_PAGE
    );
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
                {paginatedDishes.map((item, index) => (
                    <Card nome={item.nomePromocao} key={index}/>
                ))}
            </SectionMenuOptions>
            <Pagination style={{margin: "5px auto 0 auto"}}>
                <IoIosArrowBack
                    onClick={handlePrevious}
                    style={{ cursor: "pointer", opacity: currentPage === 0 ? 0.5 : 1 }}
                    size={30}
                />
                <p>{currentPage + 1}</p>
                <IoIosArrowForward
                    onClick={handleNext}
                    style={{ cursor: "pointer", opacity: currentPage === totalPages - 1 ? 0.5 : 1 }}
                    size={30}
                />
            </Pagination>
            <Helmet title="Promoções" />
        </MainContainer>
    )
}

export default Promotions
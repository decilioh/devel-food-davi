import Lupa from "../../assets/images/lupa.svg";
import {
    ButtonHeader,
    Divider,
    HeaderMenu,
    Input,
    InputWrapper,
    MainContainer,
    SearchIcon,
    SectionMenuOptions,
} from './Promotions.styles';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Card from "./components/Card";
import { IPromotion } from "../../services/promotions/createPromotion";
import { Helmet } from "react-helmet-async";
import { Pagination } from "../Home";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AuthContext, IAuthContextFunctions } from "../../context/authContext";
import Loader from "../../components/common/Loader";
import { jwtDecode } from "jwt-decode";
import { getAllPromotionsFromId } from "../../services/promotions/getAllPromotionsById";
import { ThemeContext } from "../../context/themeContext";
import { TextoDeNaoPossui } from "../Menu/Menu.styles";
import { IPropsMockPromotions } from "../../mocks/dishes";

const ITEMS_PER_PAGE = 8;

const Promotions = () => {
    const { token } = useContext(AuthContext) as IAuthContextFunctions;
    const [currentPage, setCurrentPage] = useState(0);
    const [promotions, setPromotions] = useState<Array<IPropsMockPromotions>>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState(""); // Estado para o termo de busca
    const theme = useContext(ThemeContext);
    const navigate = useNavigate();

    if (!token) return null;

    useEffect(() => {
        const fetchPromotions = async () => {
            const decoded = jwtDecode(token);
            if (!decoded.sub) return null;

            try {
                const data = await getAllPromotionsFromId(token, decoded.sub);
                setPromotions(data || []); 
                setTotalPages(Math.ceil((data.length || 0) / ITEMS_PER_PAGE)); 
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error("Erro ao buscar promoções:", error);
            }
        };

        fetchPromotions();
    }, [token]);

    if (loading) {
        return <Loader theme={theme} />;
    }

    // Filtros e paginação
    const filteredPromotions = searchTerm.length >= 2
        ? promotions.filter((promotion) =>
            promotion.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : promotions; 

    const paginatedPromotions = filteredPromotions.slice(
        currentPage * ITEMS_PER_PAGE,
        (currentPage + 1) * ITEMS_PER_PAGE
    );

    const handleNext = () => {
        if (currentPage < Math.ceil(filteredPromotions.length / ITEMS_PER_PAGE) - 1) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleDelete = (id: string | undefined) => {
        setPromotions((prevPromotions) => prevPromotions.filter((promotion) => promotion.idPromotion !== id));
    };

    return (
        <MainContainer>
            <HeaderMenu>
                <ButtonHeader id='button-function-menu' onClick={() => navigate("nova-promocao")} style={{ maxWidth: "340px" }}>
                    Nova promoção
                </ButtonHeader>
                <h2>Suas promoções</h2>
                <InputWrapper>
                    <Input
                        placeholder="Nome da promoção"
                        id='input-button-menu'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Divider />
                    <SearchIcon src={Lupa} />
                </InputWrapper>
            </HeaderMenu>
            <SectionMenuOptions>
                {paginatedPromotions.length === 0 ? (
                    <TextoDeNaoPossui>
                        Você não possui promoções disponíveis no momento.
                        Clique no botão acima para adicionar uma!
                    </TextoDeNaoPossui>
                ) : (
                    paginatedPromotions.map((item, index) => (
                        <Card
                            nome={item.name}
                            img={item.imageUrl}
                            token={token}
                            id={item.idPromotion}
                            onDelete={handleDelete}
                            key={index}
                        />
                    ))
                )}
            </SectionMenuOptions>
            {paginatedPromotions.length === 0 ? null : (
                <Pagination style={{ margin: "5px auto 0 auto" }}>
                    <IoIosArrowBack
                        onClick={handlePrevious}
                        style={{ cursor: "pointer", opacity: currentPage === 0 ? 0.5 : 1 }}
                        size={30}
                    />
                    <p>{currentPage + 1}</p>
                    <IoIosArrowForward
                        onClick={handleNext}
                        style={{ cursor: "pointer", opacity: currentPage === Math.ceil(filteredPromotions.length / ITEMS_PER_PAGE) - 1 ? 0.5 : 1 }}
                        size={30}
                    />
                </Pagination>
            )}
            <Helmet title="Promoções" />
        </MainContainer>
    )
}

export default Promotions;

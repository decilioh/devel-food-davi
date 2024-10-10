import Lupa from "../../assets/images/lupa.svg"
import { ButtonHeader, Divider, HeaderMenu, Input, InputWrapper, MainContainer, SearchIcon, SectionMenuOptions, TextoDeNaoPossui } from './Menu.styles';
import { useNavigate } from "react-router-dom";
import Card from "./components/Card";
import { IPropsMockDishes } from "../../mocks/dishes";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { Pagination } from "../Home";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { jwtDecode } from "jwt-decode";
import { AuthContext, IAuthContextFunctions } from "../../context/authContext";
import { getAllDishesFromId } from "../../services/dish/getAllDishesById";
import Loader from "../../components/common/Loader";
import { ThemeContext } from "../../context/themeContext";


const ITEMS_PER_PAGE = 8;

const Menu = () => {
    const { token } = useContext(AuthContext) as IAuthContextFunctions
    const [currentPage, setCurrentPage] = useState(0);
    const [dishes, setDishes] = useState<Array<IPropsMockDishes>>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState(""); // Estado para o termo de busca
    const theme = useContext(ThemeContext)
    const navigate = useNavigate()
    if (!token) return null
    const decoded = jwtDecode(token);
    if (!decoded) return null

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const data = await getAllDishesFromId(token, decoded.sub);
                setDishes(data.content || []);
                setTotalPages(Math.ceil((data.content?.length || 0) / ITEMS_PER_PAGE));
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error("Erro ao buscar pratos:", error);
            }
        };
        fetchDishes();
    }, []);

    if (loading) {
        return <Loader theme={theme} />;
    }

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const filteredDishes = searchTerm.length >= 2
    ? dishes.filter((dish) =>
        dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : dishes; // Se o termo tiver menos de 3 caracteres, retorna todos os pratos


    // Aplicar paginação aos pratos filtrados
    const paginatedFilteredDishes = filteredDishes.slice(
        currentPage * ITEMS_PER_PAGE,
        (currentPage + 1) * ITEMS_PER_PAGE
    );

    const handleDelete = (id: string | undefined) => {
        setDishes((prevDishes) => prevDishes.filter((dish) => dish.id !== id));
    };

    return (
        <MainContainer>
            <HeaderMenu>
                <ButtonHeader id='button-function-menu' onClick={() => navigate("novo-prato")}>Novo Prato +</ButtonHeader>
                <h2>Menu do restaurante</h2>
                <InputWrapper>
                    <Input
                        placeholder="Nome do prato"
                        id='input-button-menu'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Divider />
                    <SearchIcon src={Lupa} />
                </InputWrapper>
            </HeaderMenu>
            <SectionMenuOptions>
                {
                    paginatedFilteredDishes.length === 0 ? (
                        <TextoDeNaoPossui>
                            Você não possui pratos disponíveis no momento.
                            Clique no botão acima para adicionar uma!
                        </TextoDeNaoPossui>
                    ) : (
                        paginatedFilteredDishes.map((item, index) => (
                            <Card nome={item.dishName} img={item.photo} token={token} id={item.id} key={index} onDelete={handleDelete}/>
                        ))
                    )
                }
            </SectionMenuOptions>
            {
                paginatedFilteredDishes.length === 0 ? null : (
                    <Pagination style={{ margin: "5px auto 0 auto" }}>
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
                )
            }
            <Helmet title="Menu" />
        </MainContainer>
    )
}

export default Menu

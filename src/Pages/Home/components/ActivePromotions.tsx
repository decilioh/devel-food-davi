import { useContext, useEffect, useState } from 'react'
import { ActivePromos, CardPromos, ImageCardPromo } from '../Home.styles'
import { Pagination } from '..';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { jwtDecode } from 'jwt-decode';
import { AuthContext, IAuthContextFunctions } from '../../../context/authContext';
import { IPropsMockPromotions } from '../../../mocks/dishes';
import { getAllPromotionsFromId } from '../../../services/promotions/getAllPromotionsById';

const ActivePromotions = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const { token } = useContext(AuthContext) as IAuthContextFunctions;
    const [promotions, setPromotions] = useState<Array<IPropsMockPromotions>>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);

    const ITEMS_PER_PAGE = 2;

    const startIndex = currentPage * ITEMS_PER_PAGE;
    const selectedComments = promotions.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    if(!token) return null

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

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

    return (
        <ActivePromos>
            <h2>Promoções ativas</h2>
            <CardPromos>
            {selectedComments.length === 0 ? (
                <p style={{textAlign: "center"}}>Não existe promoções ativas</p>
            ) : (
                selectedComments.map((comment) => (
                    <ImageCardPromo src={comment.imageUrl} />
                ))
            )}
            </CardPromos>
            <Pagination>
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
        </ActivePromos>
        
    )
}

export default ActivePromotions
import React, { useContext, useEffect, useState } from 'react'
import { CommentSection, Divisor, RatingAndDate, ReviewsWithComentSection } from '../Home.styles'
import { IComents } from '../../../mocks/coments';
import { Rating } from 'react-simple-star-rating';
import { Pagination } from '..';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AuthContext, IAuthContextFunctions } from '../../../context/authContext';
import { getCommentsFromRestaurant } from '../../../services/home_requests/getCommentsRestaurant';
import { jwtDecode } from 'jwt-decode';

const ReviewsWithComent = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [comments, setComments] = useState<Array<IComents>>([])
    const { token } = useContext(AuthContext) as IAuthContextFunctions;
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);

    const ITEMS_PER_PAGE = 3;

    const startIndex = currentPage * ITEMS_PER_PAGE;
    const selectedComments = comments.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    if (!token) return null


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
        const fetchComments = async () => {
            const decoded = jwtDecode(token);
            if (!decoded.sub) return null;

            try {
                const data = await getCommentsFromRestaurant(token, decoded.sub);
                console.log(data)
                setComments(data || []);
                setTotalPages(Math.ceil((data.length || 0) / ITEMS_PER_PAGE));
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error("Erro ao buscar promoções:", error);
            }
        };

        fetchComments();
    }, [token]);



    return (
        <ReviewsWithComentSection>
            <h2>O que os clientes estão achando?</h2>
            {selectedComments.length === 0 ? (
                <p style={{textAlign: "center"}}>Não existe comentários disponibilizados ainda</p>
            ) : (
                selectedComments.map((comment, index) => (
                    <CommentSection key={index}>
                        <p>“{comment.comment}”</p>
                        <RatingAndDate>
                            <Rating
                                initialValue={Number(comment.starRating)}
                                allowFraction={true}
                                readonly={true}
                                size={30}
                                fillColor="#dfcc1b"
                            />
                            <span>{new Date(comment.createdAt).toLocaleDateString('pt-BR')}</span>
                        </RatingAndDate>
                        <Divisor>
                            <hr />
                        </Divisor>
                    </CommentSection>
                ))
            )}

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
        </ReviewsWithComentSection>
    )
}

export default ReviewsWithComent
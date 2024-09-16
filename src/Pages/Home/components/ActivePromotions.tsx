import React, { useState } from 'react'
import { ActivePromos, CardPromos, ImageCardPromo } from '../Home.styles'
import { promoImageMock } from '../../../mocks/activePromotions';
import { Pagination } from '..';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const ActivePromotions = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const commentsPerPage = 2;
    const totalPages = Math.ceil(promoImageMock.length / commentsPerPage);

    const startIndex = currentPage * commentsPerPage;
    const selectedComments = promoImageMock.slice(startIndex, startIndex + commentsPerPage);

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
    return (
        <ActivePromos>
            <h2>Promoções ativas</h2>
            <CardPromos>
            {selectedComments.map((comment) => (
                <ImageCardPromo src={comment.url} />
            ))}
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
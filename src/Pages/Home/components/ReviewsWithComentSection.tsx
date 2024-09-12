import React, { useState } from 'react'
import { CommentSection, Divisor, RatingAndDate, ReviewsWithComentSection } from '../Home.styles'
import { dataComents } from '../../../mocks/coments';
import { Rating } from 'react-simple-star-rating';
import { Pagination } from '..';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const ReviewsWithComent = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const commentsPerPage = 3;
    const totalPages = Math.ceil(dataComents.length / commentsPerPage);

    const startIndex = currentPage * commentsPerPage;
    const selectedComments = dataComents.slice(startIndex, startIndex + commentsPerPage);

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
        <ReviewsWithComentSection>
            <h2>O que os clientes estão achando?</h2>
            {selectedComments.map((comment, index) => (
                <CommentSection key={index}>
                    <p>“{comment.comment}”</p>
                    <RatingAndDate>
                        <Rating
                            initialValue={comment.starRating}
                            allowFraction={true}
                            readonly={true}
                            size={30}
                            fillColor="#dfcc1b"
                        />
                        <span>{comment.date}</span>
                    </RatingAndDate>
                    <Divisor>
                        <hr />
                    </Divisor>
                </CommentSection>
            ))}
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
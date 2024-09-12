import { Rating } from "react-simple-star-rating"
import ImagePromo from "../../assets/images/imagePromo.png"
import { ActivePromos, AvaliationsSection, CardPromos, CommentSection, Divisor, DivisorLeft, ImageCardPromo, MainContainer, RatingAndDate, RatingSection, ReviewsWithComentSection, StyledRating } from "./Home.styles"
import { Helmet } from "react-helmet-async"
import { dataComents } from "../../mocks/coments"
import { useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import styled from "styled-components"
import ReviewsWithComent from "./components/ReviewsWithComentSection"
import ActivePromotions from "./components/ActivePromotions"

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
  p{
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 21.09px;
  }
  `

const Home = () => {
  
  return (
    <MainContainer>
      <DivisorLeft>
        <AvaliationsSection>
          <h2>Avaliações</h2>
          <RatingSection>
            <StyledRating initialValue={4.5} allowFraction={true} readonly={true} fillColor="#FFE500" />
            <p>4.5/5.0</p>
          </RatingSection>
        </AvaliationsSection>
        <Divisor>
          <hr />
        </Divisor>
        <ActivePromotions/>
      </DivisorLeft>
      <ReviewsWithComent />
      <Helmet title="Home" />

    </MainContainer>
  )
}

export default Home
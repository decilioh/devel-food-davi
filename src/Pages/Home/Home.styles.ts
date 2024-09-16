import { Rating } from "react-simple-star-rating"
import styled from "styled-components"

export const MainContainer = styled.main`
  max-width: 1712.4px;
  width: 100%;
  padding: 1.25rem;
  display: flex;
  flex-direction: column; /* Responsivo por padrão */
  margin: auto;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1735px) {
    flex-direction: row;
  }

  box-sizing: border-box;
`
export const AvaliationsSection = styled.section`
  max-width: 915.4px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  h2{
    color: ${({ theme }) => theme.bodyText};
    font-family: Roboto Condensed;
    font-size: 3rem;
    margin-bottom: 3.1875rem;
    font-weight: 500;
    
    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }

  box-sizing: border-box;
`
export const RatingSection = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1px;

  p {
    margin: 0 0 3.44rem 0;
    font-weight: bold;
    font-family: Roboto condensed;
    font-size: 2.5rem;
    
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  box-sizing: border-box;
`
export const Divisor = styled.div`
  width: 100%;
  margin: 0;
  hr {
    border: 1px solid rgba(162, 162, 162, 1);
    margin: 0;
  }

  box-sizing: border-box;
`
export const ActivePromos = styled.section`
  max-width: 915.4px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  h2 {
    color: ${({ theme }) => theme.bodyText};
    font-family: Roboto Condensed;
    font-size: 3rem;
    margin: 4.8rem 0 4.125rem;
    font-weight: 500;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
      margin: 2rem 0;
    }
  }

  @media screen and (max-width: 1025px) {
    width: 90%;
  }

  box-sizing: border-box;
`
export const CardPromos = styled.div`
  display: flex;
  gap: 1.56rem;

  @media screen and (max-width: 1025px) {
    flex-direction: column;
  }

  box-sizing: border-box;
`
export const ImageCardPromo = styled.img`
  width: 300px;
  height: 207px;
  border-radius: 8px;

  @media screen and (max-width: 1025px) {
    width: 100%;
    height: auto;
    margin-bottom: 3rem;
  }

  box-sizing: border-box;
`
export const DivisorLeft = styled.div`
  max-width: 915.4px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 5.9rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 2%;
    bottom: -10%;
    right: 0;
    width: 1px;
    background-color: rgba(162, 162, 162, 1);
  }

  @media screen and (max-width: 1735px) {
    &::after {
      display: none;
    }
    padding: 0;
  }

  @media screen and (max-width: 1025px) {
    width: 90%;
    padding: 0;

    &::after {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;

    &::after {
      display: none;
    }
  }

  box-sizing: border-box;
`

export const ReviewsWithComentSection = styled.section`
  margin: 0 0 0 7vw;
  max-width: 609px;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 765px;

  h2{
    color: ${({ theme }) => theme.bodyText};
    font-family: Roboto Condensed;
    font-size: 3rem;
    margin: 0 0 3rem 0;
    text-align: center;
    font-weight: 500;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
      margin: 2vh 0;
    }
  }

  @media screen and (max-width: 1025px) {
    width: 90%;
    margin: 0;
  }

  box-sizing: border-box;
`

export const CommentSection = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;

  p {
    width: 100%;
    max-width: 606px;
    margin-bottom: 1.8rem;
    font-family: Roboto;
    
    @media screen and (max-width: 768px) {
      width: 90%;
      font-size: 1rem;
    }
  }

  box-sizing: border-box;
`

export const RatingAndDate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.3rem;

  box-sizing: border-box;
`

export const StyledRating = styled(Rating)`
    svg {
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: 800px){
    svg {
      width: 60px;
      height: 60px;
    }
  }


  @media screen and (max-width: 500px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }

  box-sizing: border-box;
`

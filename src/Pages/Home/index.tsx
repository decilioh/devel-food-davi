import { Rating } from "react-simple-star-rating"
import styled from "styled-components"
import ImagePromo from "../../assets/images/imagePromo.png"

export const MainContainer = styled.main`
  width: 100%;
  padding: 1.25rem;
  display: flex;
  @media screen and (max-width: 1025px){
    width: 100%;
    flex-direction: column;
  }
`
export const AvaliationsSection = styled.section`
  width: 47%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  h2{
    color: ${({ theme }) => theme.bodyText};
    font-family: Roboto Condensed;
    font-size: 3rem;
    margin-bottom: 3.19rem;
    font-weight: 500;
  }
`
export const RatingSection = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1px;
  p{
    margin: 0 0 3.44rem 0;
    font-weight: bold;
    font-family: Roboto condensed;
    font-size: 2.5rem;
  }
`
export const Divisor = styled.div`
  width: 100%;
  hr{
    border: 1px solid rgba(162, 162, 162, 1);
  }
`
export const ActivePromos = styled.section`
  width: 47%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  h2{
    color: ${({ theme }) => theme.bodyText};
    font-family: Roboto Condensed;
    font-size: 3rem;
    margin: 4.8rem 0 4.13rem;
    font-weight: 500;
  }

  @media screen and (max-width: 1025px){
    width: 90%;
    padding: 0;
    border: 0;

  }

`
export const CardPromos = styled.div`
  display: flex;
  gap: 1.56rem;
  @media screen and (max-width: 1025px){
    flex-direction: column;
  }
`
export const ImageCardPromo = styled.img`
  width: 16.419vw;
  @media screen and (max-width: 1025px){
    width: 90%;
    margin-bottom: 5rem;
  }
`
export const DivisorLeft = styled.div`
  width: 47%;
  display: flex;
  flex-direction: column;
  padding-right: 3.44rem;
  border-right: 1px solid rgba(162, 162, 162, 1);
  @media screen and (max-width: 1025px){
    width: 90%;
    padding: 0;
    border: 0;
  }
`
export const ReviewsWithComentSection = styled.section`
  margin: 0 0 0 7vw;
  width: 35%;
  display: flex;
  flex-direction: column;
  h2{
    color: ${({ theme }) => theme.bodyText};
    font-family: Roboto Condensed;
    font-size: 3rem;
    margin: 0 0 4.13rem;
    text-align: center;
    font-weight: 500;
  }
  @media screen and (max-width: 1025px){
    width: 90%;
    margin-bottom: 5rem;
    margin: 0;
  }
`
export const CommentSection = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  p{
    margin-bottom: 2rem;
    font-family: Roboto;
    width: 100%;
  }
`
export const RatingAndDate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.3rem;
  
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
`

const Home = () => {
  return (
    <MainContainer>
      <DivisorLeft>
        <AvaliationsSection>
          <h2>Avaliações</h2>
          <RatingSection>
            <StyledRating initialValue={4.5} allowFraction={true} readonly={true}  fillColor="#FFE500" />
            <p>4.5/5.0</p>
          </RatingSection>
        </AvaliationsSection>
          <Divisor>
            <hr />
          </Divisor>
        <ActivePromos>
          <h2>Promoções ativas</h2>
          <CardPromos>
            <ImageCardPromo src={ImagePromo} />
            <ImageCardPromo src={ImagePromo} />
          </CardPromos>
        </ActivePromos>
      </DivisorLeft>
      <ReviewsWithComentSection>
        <h2>O que os clientes estao achando?</h2>
        <CommentSection>
          <p>“A comida desse lugar é sensacional. Eu e minha esposa comemos quase todo o domingo!!!”</p>
          <RatingAndDate>
            <Rating initialValue={5} allowFraction={true} readonly={true} size={30} fillColor="#dfcc1b" />
            <span>01/01/2022</span>
          </RatingAndDate>
          <Divisor>
            <hr />
          </Divisor>
        </CommentSection>
        <CommentSection>
          <p>“A comida desse lugar é sensacional. Eu e minha esposa comemos quase todo o domingo!!!”</p>
          <RatingAndDate>
            <Rating initialValue={5} allowFraction={true} readonly={true} size={30} fillColor="#dfcc1b" />
            <span>01/01/2022</span>
          </RatingAndDate>
          <Divisor>
            <hr />
          </Divisor>
        </CommentSection>
        <CommentSection>
          <p>“A comida desse lugar é sensacional. Eu e minha esposa comemos quase todo o domingo!!!”</p>
          <RatingAndDate>
            <Rating initialValue={5} allowFraction={true} readonly={true} size={30} fillColor="#dfcc1b" />
            <span>01/01/2022</span>
          </RatingAndDate>
          <Divisor>
            <hr />
          </Divisor>
        </CommentSection>
      </ReviewsWithComentSection>
    </MainContainer>
  )
}

export default Home
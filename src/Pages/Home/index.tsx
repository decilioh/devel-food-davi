import { Rating } from "react-simple-star-rating"
import ImagePromo from "../../assets/images/imagePromo.png"
import { ActivePromos, AvaliationsSection, CardPromos, CommentSection, Divisor, DivisorLeft, ImageCardPromo, MainContainer, RatingAndDate, RatingSection, ReviewsWithComentSection, StyledRating } from "./Home.styles"



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
import { Rating } from "react-simple-star-rating"
import ImagePromo from "../../assets/images/imagePromo.png"
import { ActivePromos, AvaliationsSection, CardPromos, CommentSection, Divisor, DivisorLeft, ImageCardPromo, MainContainer, RatingAndDate, RatingSection, ReviewsWithComentSection, StyledRating } from "./Home.styles"
import { Helmet } from "react-helmet-async"
import { useContext, useEffect, useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import styled from "styled-components"
import ReviewsWithComent from "./components/ReviewsWithComentSection"
import ActivePromotions from "./components/ActivePromotions"
import { AuthContext, IAuthContextFunctions } from "../../context/authContext"
import { jwtDecode } from "jwt-decode"
import { getEvaluationRestaurant } from "../../services/home_requests/getEvaluationRestaurant"
import { toast } from "react-toastify"
import Loader from "../../components/common/Loader"
import { ThemeContext } from "../../context/themeContext"

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
  const [valuation, setValuation] = useState<number | string>(0)
  const {token} = useContext(AuthContext) as IAuthContextFunctions
  const [loading, setLoading] = useState(true);
  const theme = useContext(ThemeContext)

  if(!token) return null
  const decoded = jwtDecode(token)
  
  
  useEffect(() => {
    const fetchData = async() => {
      if(!decoded.sub) return null
      try {
        const data = await getEvaluationRestaurant(token, decoded.sub)
        console.log(data)
        setValuation(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        toast.error("Ocorreu algum erro")
      }
    }
    fetchData()
  }, [])

  if(loading) {
    return <Loader theme={theme}/>; // ou qualquer outro componente de loading
  }
  
  return (
    <MainContainer>
      <DivisorLeft>
        <AvaliationsSection>
          <h2>Avaliações</h2>
          <RatingSection>
            <StyledRating initialValue={valuation === "" ? 0 : Number(valuation)} allowFraction={true} readonly={true} fillColor="#FFE500" />
            <p>{valuation === "" ? 0 : Number(valuation)}/5.0</p>
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
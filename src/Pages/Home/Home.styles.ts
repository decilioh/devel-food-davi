import { Rating } from "react-simple-star-rating"
import styled from "styled-components"

export const MainContainer = styled.main`
  width: 1712.4px;
  padding: 1.25rem;
  display: flex;
  @media screen and (max-width: 1735px){
    width: 100%;
    flex-direction: column;
    overflow-y: auto;
  }
  box-sizing: border-box; /* Adicione isto */
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
  }
  box-sizing: border-box; /* Adicione isto */

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
  box-sizing: border-box; /* Adicione isto */

`
export const Divisor = styled.div`
  width: 100%;
  margin: 0;
  hr{
    border: 1px solid rgba(162, 162, 162, 1);
    margin: 0;
  }
  box-sizing: border-box; /* Adicione isto */

`
export const ActivePromos = styled.section`
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
    margin: 4.8rem 0 4.125rem;
    font-weight: 500;
  }

  @media screen and (max-width: 1025px){
    width: 90%;
    padding: 0;
    border: 0;

  }
  box-sizing: border-box; /* Adicione isto */


`
export const CardPromos = styled.div`
  display: flex;
  gap: 1.56rem;
  @media screen and (max-width: 1025px){
    flex-direction: column;
  }
  box-sizing: border-box; /* Adicione isto */

`
export const ImageCardPromo = styled.img`
  width: 300px;
  height: 207px;
  border-radius: 8px;
  @media screen and (max-width: 1025px){
    width: 90%;
    margin-bottom: 5rem;
  }
  box-sizing: border-box; /* Adicione isto */

`
export const DivisorLeft = styled.div`
  max-width: 915.4px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 5.9rem;
  position: relative; /* Necessário para o posicionamento do pseudo-elemento */
  
  &::after {
    content: "";
    position: absolute;
    top: 2%; /* Ajuste para aumentar a altura acima */
    bottom: -10%; /* Ajuste para aumentar a altura abaixo */
    right: 0;
    width: 1px; /* Largura da borda */
    background-color: rgba(162, 162, 162, 1); /* Cor da borda */
  }

  @media screen and (max-width: 1735px){
    &::after {
      display: none;
    }
  }

  @media screen and (max-width: 1025px) {
    width: 90%;
    padding: 0;

    &::after {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%; /* Ajusta o layout para dispositivos menores */
    padding: 0;

    &::after {
      display: none; /* Remove a borda em telas muito pequenas */
    }
  }
  box-sizing: border-box; /* Adicione isto */
`


export const ReviewsWithComentSection = styled.section`
  margin: 0 0 0 7vw;
  max-width: 609px;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 765px;
  overflow: visible; 
  h2{
    color: ${({ theme }) => theme.bodyText};
    font-family: Roboto Condensed;
    font-size: 3rem;
    margin: 3.8vh 0 2.2rem 0;
    text-align: center;
    font-weight: 500;
    
  }
  @media screen and (max-width: 1025px){
    width: 90%;
    margin-bottom: 5rem;
    margin: 0;
  }

  @media screen and (max-width: 1735px){
    margin: 0;
  }
  
  box-sizing: border-box; /* Adicione isto */

`

export const CommentSection = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  overflow: visible; /* Permite que o conteúdo ultrapasse os limites do contêiner */
  p{
    width: 606px;
    margin-bottom: 1.8rem;
    font-family: Roboto;
  }
  box-sizing: border-box; /* Adicione isto */

`

export const RatingAndDate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.3rem;
  box-sizing: border-box; /* Adicione isto */

  
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
  box-sizing: border-box; /* Adicione isto */

`
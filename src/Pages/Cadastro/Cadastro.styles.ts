import styled from "styled-components"

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2vh;
`
export const ImageLogo = styled.img`
  width: auto; // Ajuste conforme necessário
  height: auto;
  margin-bottom: 5vh;
`
export const ImageProgress = styled.img`
  width: 10vw; // Ajuste conforme necessário
  height: auto;
  @media screen and (max-width: 1024px) {
        width: 20vw;
    }

  @media screen and (max-width: 780px) {
      width: 20vw;
  }

  @media screen and (max-width: 610px) {
      width: 40vw;
  }
`

export const Paragraph = styled.p`
    font-size: 14px;
    font-family: Roboto;
`
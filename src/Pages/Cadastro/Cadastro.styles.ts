import styled from "styled-components"

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
export const ImageLogo = styled.img`
  width: auto; // Ajuste conforme necessário
  height: auto;
  margin-bottom: 18px;
`
export const ImageProgress = styled.img`
  width: 244px; // Ajuste conforme necessário
  height: auto;
  margin-bottom: 22px;
  margin-top: 20px;
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
    font-size: 18px;
    font-family: Roboto;
    text-align: center;
    width: 456px;
`
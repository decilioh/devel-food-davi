import styled from "styled-components"

export const DivPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20vh;
`

export const ImageLogo = styled.img`
  width: auto; // Ajuste conforme necessário
  height: auto;
`

export const VerifiedLogo = styled.img`
  width: 100px; // Ajuste conforme necessário
  height: auto;
`
export const TitleOrCodeVerified = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  width: 400px;
  text-align: center;
`
export const NoticeVerified = styled.span`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  margin: 2vh 0;
  width: 500px;
  color: #BFBABA;
`

export const DivSeparacao = styled.div`
  width: 20vw;
  display: flex;
  gap: 24px;
  button{
    font-size: 18px
  }
`
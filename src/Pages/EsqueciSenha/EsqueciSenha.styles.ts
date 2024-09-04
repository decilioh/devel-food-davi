import styled from "styled-components"

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow-y: hidden;
`

export const ImageLogo = styled.img`
  width: auto; // Ajuste conforme necessário
  height: auto;
  margin-bottom: 2.38rem;
`

export const VerifiedLogo = styled.img`
  width: 100px; // Ajuste conforme necessário
  height: auto;
`
export const TitleOrCodeVerified = styled.p`
  font-family: Roboto;
  font-size: 1.13rem;
  font-weight: 400;
  max-width: 400px;
  width: 100%;
  text-align: center;
`
export const NoticeVerified = styled.span`
  font-family: Roboto;
  font-size: 1.13rem;
  font-weight: 400;
  text-align: left;
  margin: 2vh 0;
  max-width: 500px;
  width: 100%;
  color: #A2A2A2;
`

export const SpacingContents = styled.div`
  margin-top: 2.75rem; 
  width: 20vw;
  display: flex;
  gap: 1.5rem;
  button{
    font-size: 1.75rem;
    height: 50px;
    border-radius: 0.3125rem;
  }
` 
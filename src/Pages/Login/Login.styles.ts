import styled from "styled-components"

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh; 
  overflow: hidden; 
  background-color: #F2F2F2;
`

export const DivImage = styled.div`
  width: 62.76%;
    
  @media screen and (max-width: 1024px) {
    width: 52.76%;
  }
  @media screen and (max-width: 780px) {
      display: none;
  }
`


export const ImagePrato = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; 
`

export const DivLogin = styled.div`
  height: 100%;
  width: 37.24%;
  display: flex;

  @media screen and (max-width: 1024px) {
    width: 57.24%;
  }
  @media screen and (max-width: 780px) {
      width: 100%;
  }
`

export const CardLogin = styled.div`
  background-color: ${({ theme }) => theme.body};
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 82.24%;
  height: 90vh;
  border-radius: 1.44rem;
  opacity: 0px;
  box-shadow: 0.25rem 0.25rem 1.25rem 0px #00000040;

  @media screen and (max-width: 1024px) {
    width: 50vw;
  }
  @media screen and (max-width: 780px) {
      width: 100%;
      box-shadow: none;
      gap: 5.5rem;
  }
  
`


export const ImageLogo = styled.img`
  margin-top: 4.63rem;
  width: auto; // Ajuste conforme necessário
  height: auto;
`

export const CardLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-height: 840px){
        margin-top: 0.875rem;
      }

  a{
    font-size: 1.13rem;
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    font-family: Roboto;
    @media screen and (max-height: 840px){
      font-size: 0.875rem;
    }
  }

  
`




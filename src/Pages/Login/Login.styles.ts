import styled from "styled-components"

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  
`

export const CardLogin = styled.div`
  background-color: ${({ theme }) => theme.body};
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 30vw;
  height: 90vh;
  border-radius: 23px;
  opacity: 0px;
  box-shadow: 4px 4px 20px 0px #00000040;

  @media screen and (max-width: 1024px) {
    width: 50vw;
  }
  @media screen and (max-width: 780px) {
        width: 60vw;
  }
  @media screen and (max-width: 610px) {
       width: 90vw;
  }
  
`

export const CardLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

  a{
      font-size: 14px;
      text-decoration: none;
      color: ${({ theme }) => theme.primary};
      font-weight: 600;
      cursor: pointer;
    }
`

export const ImageLogo = styled.img`
  margin-top: 5vh;
  width: auto; // Ajuste conforme necessário
  height: auto;
`

export const ImagePrato = styled.img`
  width: 100%;
  height: 100%;
  background: no-repeat center;
  background-size: cover;   

`
export const DivImage = styled.div`
  width: 50%;
  height: 100vh;

  @media screen and (max-width: 1024px) {
    width: 40%;
  }
  @media screen and (max-width: 780px) {
        width: 30%;
  }
  @media screen and (max-width: 610px) {
       display: none;
  }
`

export const DivLogin = styled.div`
  height: 100%;
  width: 50%;
  display: flex;

  @media screen and (max-width: 1024px) {
    width: 60%;
  }
  @media screen and (max-width: 780px) {
        width: 70%;
  }
  @media screen and (max-width: 610px) {
       width: 100%;
  }
`

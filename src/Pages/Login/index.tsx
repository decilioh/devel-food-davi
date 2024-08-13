import styled from 'styled-components'
import ImagemPrato from "../../assets/images/fotoCapaLogin.png"
import Form from './components/Form'
import ImgLogo from "../../assets/images/logoDevelThemeWhite.svg"
import { Link } from 'react-router-dom'

const DivPrincipal = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  
`

const CardLogin = styled.div`
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

const CardLinks = styled.div`
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

const ImageLogo = styled.img`
  margin-top: 5vh;
  width: auto; // Ajuste conforme necessário
  height: auto;
`

const ImagePrato = styled.img`
  width: 100%;
  height: 100%;
  background: no-repeat center;
  background-size: cover;   

`
const DivImage = styled.div`
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

const DivLogin = styled.div`
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



const Login = () => {
  return (
    <DivPrincipal>
      <DivImage>
        <ImagePrato src={ImagemPrato} alt="Imagens de comidas" />
      </DivImage>
      <DivLogin>
        <CardLogin>
          <ImageLogo src={ImgLogo} alt='Logo da Develfood' />
          <Form />
          <CardLinks>
            <Link to="/esqueci-senha">Esqueci minha senha</Link>
            <Link to="/cadastrar">Criar conta</Link>
          </CardLinks>
        </CardLogin>
      </DivLogin>
    </DivPrincipal>
  )
}

export default Login
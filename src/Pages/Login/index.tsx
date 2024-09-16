import ImagemPrato from "../../assets/images/fotoCapaLogin.png"
import Form from './components/Form'
import ImgLogoWhite from "../../assets/images/logoDevelThemeWhite.svg"
import ImgLogoBlack from "../../assets/images/logoDevelThemeBlack.svg"
import { Link } from 'react-router-dom'
import { CardLinks, CardLogin, DivImage, DivLogin, MainContainer, ImageLogo, ImagePrato } from "./Login.styles"
import { useContext } from "react"
import { ThemeContext } from "../../context/themeContext"
import { Helmet } from "react-helmet-async"


const Login = () => {
  const theme = useContext(ThemeContext)

  return (
    <MainContainer>
      <DivImage>
        <ImagePrato src={ImagemPrato} alt="Imagens de comidas" id="image-prato"/>
      </DivImage>
      <DivLogin>
        <CardLogin>
          <ImageLogo  src={theme?.theme === "light" ? ImgLogoWhite : ImgLogoBlack} alt='Logo da Develfood' id="image-logo"/>
          <Form />
          <CardLinks>
            <Link to="/esqueci-minha-senha">Esqueci minha senha</Link>
            <Link to="/cadastrar">Criar conta</Link>
          </CardLinks>
        </CardLogin>
      </DivLogin>
      <Helmet title="Login" />
    </MainContainer>
  )
}

export default Login
import ImagemPrato from "../../assets/images/fotoCapaLogin.png"
import Form from './components/Form'
import ImgLogoWhite from "../../assets/images/logoDevelThemeWhite.svg"
import ImgLogoBlack from "../../assets/images/logoDevelThemeBlack.svg"
import { Link } from 'react-router-dom'
import { CardLinks, CardLogin, DivImage, DivLogin, MainContainer, ImageLogo, ImagePrato } from "./Login.styles"
import { useContext } from "react"
import { ThemeContext } from "../../context/themeContext"


const Login = () => {
  const theme = useContext(ThemeContext)

  console.log("REACT_APP_BASE_URL_CEP", process.env.REACT_APP_BASE_URL_CEP);
  console.log("VITE_SOME_KEY", import.meta.env.VITE_SOME_KEY);

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
    </MainContainer>
  )
}

export default Login
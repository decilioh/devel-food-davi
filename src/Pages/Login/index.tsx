import ImagemPrato from "../../assets/images/fotoCapaLogin.png"
import Form from './components/Form'
import ImgLogo from "../../assets/images/logoDevelThemeWhite.svg"
import { Link } from 'react-router-dom'
import { CardLinks, CardLogin, DivImage, DivLogin, DivPrincipal, ImageLogo, ImagePrato } from "./Login.styles"


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
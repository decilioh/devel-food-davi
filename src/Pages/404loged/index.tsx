import { Link, useNavigate } from "react-router-dom"
import Button from "../../components/common/Button"
import { useContext } from "react"
import { ThemeContext } from "../../context/themeContext"
import logoDevelThemeWhite from "../../assets/images/logoDevelThemeWhite.svg"
import logoDevelThemeBlack from "../../assets/images/logoDevelThemeBlack.svg"
import { LogoContainer, MainContainer, MessageError } from "./404loged.styles"
import { TbMoodSadDizzy } from "react-icons/tb"



export const Error404Loged = () => {
    const theme = useContext(ThemeContext)
    const navigate = useNavigate()
    return (
        <MainContainer>
            <LogoContainer>
                <TbMoodSadDizzy/>
            </LogoContainer>
            <MessageError>
                <span>404</span>
                <p>
                    Você entrou em alguma página não existente ou ocorreu algum
                    erro por parte do nosso sistema, retorne para a página inicial
                </p>
            </MessageError>
            <Button id="button-return" onClick={() => navigate("/admin/home")}>Home</Button>
        </MainContainer>
    )
}
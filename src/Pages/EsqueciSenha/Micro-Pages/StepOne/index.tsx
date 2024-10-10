
import ImgLogoWhite from "../../../../assets/images/logoDevelThemeWhite.svg"
import ImgLogoBlack from "../../../../assets/images/logoDevelThemeBlack.svg"
import FormJustEmail from "../../components/FormJustEmail"
import { ImageLogo } from "../../EsqueciSenha.styles"
import { ThemeContext } from "../../../../context/themeContext"
import { useContext } from "react"

interface Props{
    value: React.Dispatch<React.SetStateAction<number>>
    setEmail:  React.Dispatch<React.SetStateAction<string>>
}

const StepOne = ({value, setEmail}: Props) => {
    const theme = useContext(ThemeContext)

    return (
        <>
            <ImageLogo src={theme?.theme === "light" ? ImgLogoWhite : ImgLogoBlack} id="image-logo"/>
            <FormJustEmail value={value} setEmail={setEmail}/>
        </>
    )
}

export default StepOne

import ImgLogoWhite from "../../../../assets/images/logoDevelThemeWhite.svg"
import ImgLogoBlack from "../../../../assets/images/logoDevelThemeBlack.svg"
import FormJustEmail from "../../components/FormJustEmail"
import { ImageLogo } from "../../EsqueciSenha.styles"
import { ThemeContext } from "../../../../context/themeContext"
import { useContext } from "react"

interface Props{
    value: React.Dispatch<React.SetStateAction<number>>
}

const StepOne = ({value}: Props) => {
    const theme = useContext(ThemeContext)

    return (
        <>
            <ImageLogo src={theme?.theme === "light" ? ImgLogoWhite : ImgLogoBlack} id="image-logo"/>
            <FormJustEmail value={value}/>
        </>
    )
}

export default StepOne
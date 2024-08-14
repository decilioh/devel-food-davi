
import ImgLogo from "../../../../assets/images/logoDevelThemeWhite.svg"
import FormJustEmail from "../../components/FormJustEmail"
import { ImageLogo } from "../../EsqueciSenha.styles"

interface Props{
    valor: React.Dispatch<React.SetStateAction<number>>
}

const StepOne = ({valor}: Props) => {
    return (
        <>
            <ImageLogo src={ImgLogo} />
            <FormJustEmail valor={valor}/>
        </>
    )
}

export default StepOne

import ImgLogo from "../../../../assets/images/logoDevelThemeWhite.svg"
import FormJustEmail from "../../components/FormJustEmail"
import { ImageLogo } from "../../EsqueciSenha.styles"

interface Props{
    value: React.Dispatch<React.SetStateAction<number>>
}

const StepOne = ({value}: Props) => {
    return (
        <>
            <ImageLogo src={ImgLogo} />
            <FormJustEmail value={value}/>
        </>
    )
}

export default StepOne
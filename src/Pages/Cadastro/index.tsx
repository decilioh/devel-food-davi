import ImgLogoWhite from "../../assets/images/logoDevelThemeWhite.svg"
import ImgLogoBlack from "../../assets/images/logoDevelThemeBlack.svg"

import ProgressOneWhite from "../../assets/images/progress/progress1light.png"
import ProgressTwoWhite from "../../assets/images/progress/progress2light.png"
import ProgressThreeWhite from "../../assets/images/progress/progress3light.png"

import ProgressOneBlack from "../../assets/images/progress/progress1black.png"
import ProgressTwoBlack from "../../assets/images/progress/progress2black.png"
import ProgressThreeBlack from "../../assets/images/progress/progress3black.png"

import FormStepOne from './components/FormStepOne'
import FormStepTwo from './components/FormStepTwo'
import { useContext, useState } from 'react'
import FormStepThree from './components/FormStepThree'
import { MainContainer, ImageLogo, ImageProgress } from './Cadastro.styles'
import Finally from "./components/Finally"
import { ThemeContext } from "../../context/themeContext"




const Register = () => {
  const [value, setvalue] = useState(1)
  const [succesOrError, setSuccesOrError] = useState<boolean>(true)
  const theme = useContext(ThemeContext)

  const progressWhite = value === 1 ? ProgressOneWhite : value === 2 ? ProgressTwoWhite : value === 3 ? ProgressThreeWhite : ""
  const progressBlack = value === 1 ? ProgressOneBlack : value === 2 ? ProgressTwoBlack : value === 3 ? ProgressThreeBlack : ""

  


  function checkStep() {
    switch (value) {
      case 1:
        return <FormStepOne setvalue={setvalue} />
      case 2:
        return <FormStepTwo setvalue={setvalue} />
      case 3:
        return <FormStepThree setvalue={setvalue}/>
      case 4:
        return <Finally setvalue={setvalue}  sucessOrError={succesOrError}/>
      default:
        break;
    }
  }

  return (
    <MainContainer>
      <ImageLogo src={theme?.theme === "light" ? ImgLogoWhite : ImgLogoBlack} id="image-logo" />
      <ImageProgress src={theme?.theme === "light" ? progressWhite : progressBlack} />
      {checkStep()}
    </MainContainer>
  )
}

export default Register
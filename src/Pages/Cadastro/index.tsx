import ImgLogo from "../../assets/images/logoDevelThemeWhite.svg"
import ProgressOne from "../../assets/images/progress/progress1light.png"
import ProgressTwo from "../../assets/images/progress/progress2light.png"
import ProgressThree from "../../assets/images/progress/progress3light.png"

import FormStepOne from './components/FormStepOne'
import FormStepTwo from './components/FormStepTwo'
import { useState } from 'react'
import FormStepThree from './components/FormStepThree'
import { MainContainer, ImageLogo, ImageProgress } from './Cadastro.styles'
import Finally from "./components/Finally"




const Register = () => {
  const [value, setvalue] = useState(1)
  const [succesOrError, setSuccesOrError] = useState<boolean>(true)


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
      <ImageLogo src={ImgLogo} id="image-logo"/>
      <ImageProgress src={value === 1 ? ProgressOne : value === 2 ? ProgressTwo : value === 3 ? ProgressThree : ""} />
      {checkStep()}
    </MainContainer>
  )
}

export default Register
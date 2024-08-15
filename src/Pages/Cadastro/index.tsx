import ImgLogo from "../../assets/images/logoDevelThemeWhite.svg"
import ProgressOne from "../../assets/images/progress/progress1light.png"
import ProgressTwo from "../../assets/images/progress/progress2light.png"
import ProgressThree from "../../assets/images/progress/progress3light.png"

import FormStepOne from './components/FormStepOne'
import FormStepTwo from './components/FormStepTwo'
import { useState } from 'react'
import FormStepThree from './components/FormStepThree'
import { DivPrincipal, ImageLogo, ImageProgress } from './Cadastro.styles'
import Finally from "./components/Finally"




const Cadastro = () => {
  const [valor, setValor] = useState(1)
  const [succesOrError, setSuccesOrError] = useState<boolean>(true)


  function checkStep() {
    switch (valor) {
      case 1:
        return <FormStepOne setValor={setValor} />
      case 2:
        return <FormStepTwo setValor={setValor} />
      case 3:
        return <FormStepThree setValor={setValor}/>
      case 4:
        return <Finally setValor={setValor}  sucessOrError={succesOrError}/>
      default:
        break;
    }
  }

  return (
    <DivPrincipal>
      <ImageLogo src={ImgLogo} />
      <ImageProgress src={valor === 1 ? ProgressOne : valor === 2 ? ProgressTwo : valor === 3 ? ProgressThree : ""} />
      {checkStep()}
    </DivPrincipal>
  )
}

export default Cadastro
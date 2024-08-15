import styled from "styled-components"
import StepOne from "./Micro-Pages/StepOne"
import StepTwo from "./Micro-Pages/StepTwo"
import { useState } from "react"
import StepThree from "./Micro-Pages/StepThree"
import { MainContainer } from "./EsqueciSenha.styles"





const ForgotMyPassword = () => {
  const [value, setValue] = useState<number>(1)

  function checkStep(){
      switch (value) {
        case 1:
          return <StepOne value={setValue}/>
        case 2: 
          return <StepTwo value={setValue} />
        case 3: 
          return <StepThree value={setValue}/>
        default:
          break;
      }
  }
  return (
    <MainContainer>
      {checkStep()}
    </MainContainer>
  )
}

export default ForgotMyPassword
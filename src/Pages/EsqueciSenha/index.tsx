import styled from "styled-components"
import StepOne from "./Micro-Pages/StepOne"
import StepTwo from "./Micro-Pages/StepTwo"
import { useState } from "react"
import StepThree from "./Micro-Pages/StepThree"
import { MainContainer } from "./EsqueciSenha.styles"
import { Helmet } from "react-helmet-async"





const ForgotMyPassword = () => {
  const [value, setValue] = useState<number>(1)
  const [email, setEmail] = useState<string>("")

  function checkStep(){
      switch (value) {
        case 1:
          return <StepOne value={setValue} setEmail={setEmail} />
        case 2: 
          return <StepTwo value={setValue} />
        case 3: 
          return <StepThree value={setValue} email={email} />
        default:
          break;
      }
  }
  return (
    <MainContainer>
      {checkStep()}
      <Helmet title="Login" />
    </MainContainer>
  )
}

export default ForgotMyPassword


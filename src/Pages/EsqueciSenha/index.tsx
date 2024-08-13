import styled from "styled-components"
import StepOne from "./Micro-Pages/StepOne"
import StepTwo from "./Micro-Pages/StepTwo"
import { useState } from "react"
import StepThree from "./Micro-Pages/StepThree"
import { DivPrincipal } from "./EsqueciSenha.styles"





const EsqueciSenha = () => {
  const [value, setValue] = useState<number>(1)

  function checkStep(){
      switch (value) {
        case 1:
          return <StepOne valor={setValue}/>
        case 2: 
          return <StepTwo valor={setValue} />
        case 3: 
          return <StepThree valor={setValue}/>
        default:
          break;
      }
  }
  return (
    <DivPrincipal>
      {checkStep()}
    </DivPrincipal>
  )
}

export default EsqueciSenha
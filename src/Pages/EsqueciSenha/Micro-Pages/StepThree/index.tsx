import React from 'react'
import ImgLogo from "../../../../assets/images/logoDevelThemeWhite.svg"
import { DivSeparacao, ImageLogo } from '../../EsqueciSenha.styles'
import FormValidation from '../../components/FormValidation'
import Button from '../../../../components/common/Button'
import { useNavigate } from 'react-router-dom'

interface Props {
  valor: React.Dispatch<React.SetStateAction<number>>
}

const StepThree = ({ valor }: Props) => {
  return (
    <>
      <ImageLogo src={ImgLogo} />
      <FormValidation  valor={valor}/>

    </>
  )
}

export default StepThree
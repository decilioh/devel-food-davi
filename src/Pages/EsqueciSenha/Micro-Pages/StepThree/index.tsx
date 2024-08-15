import React from 'react'
import ImgLogo from "../../../../assets/images/logoDevelThemeWhite.svg"
import { DivSeparacao, ImageLogo } from '../../EsqueciSenha.styles'
import FormValidation from '../../components/FormValidation'
import Button from '../../../../components/common/Button'
import { useNavigate } from 'react-router-dom'

interface Props {
  value: React.Dispatch<React.SetStateAction<number>>
}

const StepThree = ({ value }: Props) => {
  return (
    <>
      <ImageLogo src={ImgLogo} />
      <FormValidation  value={value}/>

    </>
  )
}

export default StepThree
import React, { useContext } from 'react'
import ImgLogoWhite from "../../../../assets/images/logoDevelThemeWhite.svg"
import ImgLogoBlack from "../../../../assets/images/logoDevelThemeBlack.svg"
import { SpacingContents, ImageLogo } from '../../EsqueciSenha.styles'
import FormValidation from '../../components/FormValidation'
import Button from '../../../../components/common/Button'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../../../context/themeContext'

interface Props {
  value: React.Dispatch<React.SetStateAction<number>>
}

const StepThree = ({ value }: Props) => {
  const theme = useContext(ThemeContext)

  return (
    <>
      <ImageLogo src={theme?.theme === "light" ? ImgLogoWhite : ImgLogoBlack} id="image-logo" />
      <FormValidation value={value} />

    </>
  )
}

export default StepThree
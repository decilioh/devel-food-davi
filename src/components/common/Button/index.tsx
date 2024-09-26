import { ReactNode } from "react"
import { ButtonApp } from "./button.styles"

export interface ButtonProps{
    children: ReactNode
    type?: "button" | "submit" | "reset" | undefined
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    id: string
    style?: React.CSSProperties | undefined
    isSubmitting?: boolean
}

const Button = ({id, children, type="button", onClick=()=>{}, style, isSubmitting}: ButtonProps) => {
  return (
    <ButtonApp type={type} id={id} disabled={isSubmitting} onClick={onClick} style={style}>
        {children}
    </ButtonApp>
  )
}

export default Button
import { ReactNode } from "react"
import { ButtonApp } from "./button.styles"

export interface ButtonProps{
    children: ReactNode
    type?: "button" | "submit" | "reset" | undefined
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    id: string
    style?: React.CSSProperties | undefined
}

const Button = ({id, children, type="button", onClick=()=>{}, style}: ButtonProps) => {
  return (
    <ButtonApp type={type} id={id} onClick={onClick} style={style}>
        {children}
    </ButtonApp>
  )
}

export default Button
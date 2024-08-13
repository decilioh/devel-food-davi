import { ReactNode } from "react"
import { ButtonApp } from "./button.styles"

interface Props{
    children: ReactNode
    type?: "button" | "submit" | "reset" | undefined
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    id: string
}

const Button = ({id, children, type="button", onClick=undefined}: Props) => {
  return (
    <ButtonApp type={type} onClick={() => onClick}>
        {children}
    </ButtonApp>
  )
}

export default Button
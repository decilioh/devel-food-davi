import { ReactNode } from "react"
import { ButtonApp } from "./button.styles"

interface Props{
    children: ReactNode
    type?: "button" | "submit" | "reset" | undefined
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    id: string
}

const Button = ({id, children, type="button", onClick=()=>{}}: Props) => {
  return (
    <ButtonApp id={id} type={type} onClick={onClick}>
        {children}
    </ButtonApp>
  )
}

export default Button
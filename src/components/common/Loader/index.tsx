import { MoonLoader } from "react-spinners"
import { Centralize, Overlay } from "./Loader.styles"
import { useContext } from "react"
import { ThemeContext } from "styled-components"
import { ThemeContextProps } from "../../../context/themeContext"


interface Props{
    theme: ThemeContextProps | undefined
}

const Loader = ({theme}: Props) => {

    return (
        <Overlay>
            <Centralize>
                <MoonLoader
                    color={theme?.theme === "light" ? "#071A40" : '#07D9D9'}
                />
            </Centralize>
        </Overlay>
    )
}

export default Loader
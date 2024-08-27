import { useContext } from 'react'
import { ImageLogoHeader, HeaderHome } from './Header.styles'
import { ThemeContext } from '../../../context/themeContext'
import LogoDevelHeaderWhite from "../../../assets/images/LogoDevelHeaderWhite.png"
import LogoDevelHeaderBlack from "../../../assets/images/LogoDevelHeaderBlack.png"

const HeaderMain = () => {
    const theme = useContext(ThemeContext)
    return (
        <HeaderHome><ImageLogoHeader src={theme?.theme === "light" ? LogoDevelHeaderWhite : LogoDevelHeaderBlack} /></HeaderHome>
    )
}

export default HeaderMain
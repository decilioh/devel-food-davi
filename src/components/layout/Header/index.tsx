import { useContext } from 'react';
import { ImageLogoHeader, HeaderHome, MenuButton, ButtonToggle } from './Header.styles';
import { ThemeContext } from '../../../context/themeContext';
import LogoDevelHeaderWhite from "../../../assets/images/LogoDevelHeaderWhite.png";
import LogoDevelHeaderBlack from "../../../assets/images/LogoDevelHeaderBlack.png";
import { FaBars } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import styled from 'styled-components';

interface HeaderMainProps {
    toggleSidebar: () => void;
}


const HeaderMain: React.FC<HeaderMainProps> = ({ toggleSidebar }) => {
    const theme = useContext(ThemeContext);

    return (
        <HeaderHome>
            <MenuButton onClick={toggleSidebar}>
                <FaBars />
            </MenuButton>
            <ImageLogoHeader src={theme?.theme === "light" ? LogoDevelHeaderWhite : LogoDevelHeaderBlack} />
            <ButtonToggle onClick={theme?.toggleTheme}>
                {theme?.theme === "light" ? <MdDarkMode /> : <MdLightMode />}
            </ButtonToggle>
        </HeaderHome>
    );
}

export default HeaderMain;

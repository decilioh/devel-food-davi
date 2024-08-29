import { useContext } from 'react';
import { ImageLogoHeader, HeaderHome, MenuButton } from './Header.styles';
import { ThemeContext } from '../../../context/themeContext';
import LogoDevelHeaderWhite from "../../../assets/images/LogoDevelHeaderWhite.png";
import LogoDevelHeaderBlack from "../../../assets/images/LogoDevelHeaderBlack.png";
import { FaBars } from 'react-icons/fa';

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
        </HeaderHome>
    );
}

export default HeaderMain;

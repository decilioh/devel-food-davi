import { useContext, useState } from 'react';
import { FaUser, FaUtensils, FaDollarSign, FaBars, FaPhoneAlt } from 'react-icons/fa';
import { Container, LineDivisor, Menu, MenuItem, TitleOpen, ToggleSidebarButton } from './Sidebar.styles';
import { MdDarkMode, MdKeyboardArrowLeft, MdLightMode } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { ThemeContext } from '../../../context/themeContext';
import { TbLogout2 } from "react-icons/tb";

interface SidebarProps {
  isMobile: boolean;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobile, isOpen, toggleSidebar }) => {
  const theme = useContext(ThemeContext);

  return (
    <Container isOpen={isOpen} isMobile={isMobile}>
      {!isMobile && (
        <ToggleSidebarButton onClick={toggleSidebar} id='sidebar-toggle'>
          {!isOpen ?
            <FaBars />
            :
            <TitleOpen>
              <span>DEVELFOOD</span>
              <span><MdKeyboardArrowLeft /></span>
            </TitleOpen>
          }

          <LineDivisor isOpen={isOpen}>
            <hr />
          </LineDivisor>
        </ToggleSidebarButton>
      )}
      <Menu>
        <MenuItem id='sidebar-home'>
          <AiFillHome />
          {isOpen && !isMobile && <span>Home</span>}
        </MenuItem>
        <MenuItem id='sidebar-profile'>
          <FaUser />
          {isOpen && !isMobile && <span>Perfil</span>}
        </MenuItem>
        <MenuItem id='sidebar-menu'>
          <FaUtensils />
          {isOpen && !isMobile && <span>Menu</span>}
        </MenuItem>
        <MenuItem id='sidebar-orders'>
          <FaPhoneAlt />
          {isOpen && !isMobile && <span>Pedidos</span>}
        </MenuItem>
        <MenuItem id='sidebar-promotions'>
          <FaDollarSign />
          {isOpen && !isMobile && <span>Promoções</span>}
        </MenuItem>
        <MenuItem id='sidebar-theme' onClick={theme?.toggleTheme}>
          {theme?.theme === "light" ? <MdDarkMode /> : <MdLightMode />}
          {isOpen && !isMobile && <span>Tema</span>}
        </MenuItem>
        <MenuItem id='sidebar-logout'>
          <TbLogout2 />
          {isOpen && !isMobile && <span>Sair</span>}
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Sidebar;

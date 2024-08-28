import { useContext, useState } from 'react';
import {  FaUser, FaUtensils, FaDollarSign, FaBars, FaPhoneAlt } from 'react-icons/fa';
import { Container, LineDivisor, Menu, MenuItem, TitleOpen, ToggleSidebarButton } from './Sidebar.styles';
import { MdDarkMode, MdKeyboardArrowLeft, MdLightMode } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { ThemeContext } from '../../../context/themeContext';
import { TbLogout2 } from "react-icons/tb";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const theme = useContext(ThemeContext)

  return (
    <Container isOpen={isOpen}>
      <ToggleSidebarButton onClick={() => setIsOpen(!isOpen)} id='sidebar-toggle'>
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
      <Menu>
        <MenuItem id='sidebar-home'>
          <AiFillHome />
          {isOpen && <span>Home</span>}
        </MenuItem>
        <MenuItem id='sidebar-profile'>
          <FaUser />
          {isOpen && <span>Perfil</span>}
        </MenuItem>
        <MenuItem id='sidebar-menu'>
          <FaUtensils />
          {isOpen && <span>Menu</span>}
        </MenuItem>
        <MenuItem id='sidebar-orders'>
          <FaPhoneAlt />
          {isOpen && <span>Pedidos</span>}
        </MenuItem>
        <MenuItem id='sidebar-promotions'>
          <FaDollarSign />
          {isOpen && <span>Promoções</span>}
        </MenuItem>
        <MenuItem id='sidebar-theme' onClick={theme?.toggleTheme}>
          {theme?.theme === "light" ? <MdDarkMode /> : <MdLightMode />}
          {isOpen && <span>Tema</span>}
        </MenuItem>
        <MenuItem id='sidebar-theme' onClick={theme?.toggleTheme}>
          <TbLogout2 />
          {isOpen && <span>Sair</span>}
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Sidebar;

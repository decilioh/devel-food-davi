import { useContext, useState } from 'react';
import { FaUser, FaUtensils, FaDollarSign, FaBars, FaPhoneAlt } from 'react-icons/fa';
import { Container, LineDivisor, Menu, MenuItem, MenuItemPlus, TitleOpen, ToggleSidebarButton } from './Sidebar.styles';
import { MdDarkMode, MdKeyboardArrowLeft, MdLightMode } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { ThemeContext } from '../../../context/themeContext';
import { TbLogout2 } from "react-icons/tb";
import { AuthContext, IAuthContextFunctions } from '../../../context/authContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export interface SidebarProps {
  isMobile: boolean;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobile, isOpen, toggleSidebar }) => {
  const navigate = useNavigate()
  const {signOutCookies} = useContext(AuthContext) as IAuthContextFunctions

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
        <MenuItem id='sidebar-home' onClick={() => navigate("home")}>
          <AiFillHome />
          {isOpen && !isMobile && <span>Home</span>}
        </MenuItem>
        <MenuItem id='sidebar-profile' onClick={() => navigate("perfil")}>
          <FaUser />
          {isOpen && !isMobile && <span>Perfil</span>}
        </MenuItem>
        <MenuItem id='sidebar-menu' onClick={() => navigate("menu")}>
          <FaUtensils />
          {isOpen && !isMobile && <span>Menu</span>}
        </MenuItem>
        <MenuItemPlus isOpen={isOpen} id='sidebar-menu' onClick={() => navigate("menu/novo-prato")} style={{marginLeft: "2rem"}}>
          <FaUtensils />
          {isOpen && !isMobile && <span>+ Novo prato</span>}
        </MenuItemPlus>
        <MenuItem id='sidebar-orders'>
          <FaPhoneAlt />
          {isOpen && !isMobile && <span>Pedidos</span>}
        </MenuItem>
        <MenuItem id='sidebar-promotions' onClick={() => navigate("promocoes")}>
          <FaDollarSign />
          {isOpen && !isMobile && <span>Promoções</span>}
        </MenuItem>
        <MenuItemPlus isOpen={isOpen} id='sidebar-promotions' onClick={() => navigate("promocoes/nova-promocao")}>
          <FaDollarSign />
          {isOpen && !isMobile && <span>+ Nova promoção</span>}
        </MenuItemPlus>
        <MenuItem id='sidebar-logout' onClick={signOutCookies}>
          <TbLogout2 />
          {isOpen && !isMobile && <span>Sair</span>}
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Sidebar;

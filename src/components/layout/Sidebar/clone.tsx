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

const SidebarClone: React.FC<SidebarProps> = ({ isMobile, isOpen, toggleSidebar }) => {
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
        <MenuItemPlus isOpen={isOpen} id='sidebar-new-dishes'>
          <FaUtensils />
          {isOpen && !isMobile && <span>+ Cadastrar prato</span>}
        </MenuItemPlus>
        <MenuItem id='sidebar-orders'>
          <FaPhoneAlt />
          {isOpen && !isMobile && <span>Pedidos</span>}
        </MenuItem>
        <MenuItem id='sidebar-promotions'>
          <FaDollarSign />
          {isOpen && !isMobile && <span>Promoções</span>}
        </MenuItem>
        <MenuItemPlus isOpen={isOpen} id='sidebar-new-promotion'>
          <FaDollarSign />
          {isOpen && !isMobile && <span>+ Cadastrar promoção</span>}
        </MenuItemPlus>
        <MenuItem id='sidebar-logout' >
          <TbLogout2 />
          {isOpen && !isMobile && <span>Sair</span>}
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default SidebarClone;

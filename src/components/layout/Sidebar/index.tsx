import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaUser, FaUtensils, FaPhone, FaDollarSign, FaBars } from 'react-icons/fa';
import { Container, Menu, MenuItem, TitleOpen, ToggleSidebarButton} from './Sidebar.styles';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Container isOpen={isOpen}>
      <ToggleSidebarButton onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? 
        <FaBars /> 
        : 
        <TitleOpen>
            <span>Develfood</span>  
            <span>&lt;</span>
        </TitleOpen>}
      </ToggleSidebarButton>
      <Menu>
        <MenuItem>
          <FaHome />
          {isOpen && <span>Home</span>}
        </MenuItem>
        <MenuItem>
          <FaUser />
          {isOpen && <span>Perfil</span>}
        </MenuItem>
        <MenuItem>
          <FaUtensils />
          {isOpen && <span>Menu</span>}
        </MenuItem>
        <MenuItem>
          <FaPhone />
          {isOpen && <span>Pedidos</span>}
        </MenuItem>
        <MenuItem>
          <FaDollarSign />
          {isOpen && <span>Promoções</span>}
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Sidebar;

import styled from "styled-components"

import { useContext, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import HeaderMain from "../../components/layout/Header";
import { ModalContext } from "../../context/modalContext";
import Sidebar from "../../components/layout/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  @media screen and (max-width: 1025px){
    overflow-y: auto;
  }
  
`;

const MainSection = styled.div`
  display: flex;
  flex: 1;
`;

const Content = styled.div`
  background-color: ${({ theme }) => theme.background};
  overflow-y: hidden;
  max-height: 1080px;
  overflow-x: hidden;

  width: 100%;
  margin: auto 0 auto 99px;
  @media screen and (max-width: 1025px){
    overflow-y: auto;
    margin: auto 0 auto auto;

  }
  
`;



const Layout = () => {
  const theme = useContext(ThemeContext)
  const modalContext = useContext(ModalContext)

  return (
    <MainContainer>
      <HeaderMain />
      <MainSection>
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
      </MainSection>
    </MainContainer>
  )
}

export default Layout
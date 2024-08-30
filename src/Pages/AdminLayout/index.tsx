import styled from "styled-components"

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import HeaderMain from "../../components/layout/Header";
import { ModalContext } from "../../context/modalContext";
import Sidebar from "../../components/layout/Sidebar";
import { Outlet } from "react-router-dom";
import { Content, MainContainer, MainSection } from "./AdminLayout.styles";





const Layout = () => {
  const theme = useContext(ThemeContext)
  const modalContext = useContext(ModalContext)
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 650);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 650);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <MainContainer>
      <HeaderMain toggleSidebar={toggleSidebar} />
      <MainSection>
        <Sidebar isMobile={isMobile} toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
        <Content>
          <Outlet />
        </Content>
      </MainSection>
    </MainContainer>
  )
}

export default Layout
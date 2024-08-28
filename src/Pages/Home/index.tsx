import styled from "styled-components"

import { useContext, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import HeaderMain from "../../components/layout/Header";
import Loader from "../../components/common/Loader";
import Button from "../../components/common/Button";
import Modal from "../../components/common/Modal";
import { ModalContext } from "../../context/modalContext";
import Sidebar from "../../components/layout/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainSection = styled.div`
  display: flex;
  flex: 1;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  overflow-y: auto;
`;



const Layout = () => {
    const theme = useContext(ThemeContext)
    const modalContext = useContext(ModalContext)

    return (
        <MainContainer>
            <HeaderMain />
            <MainSection>
                <Sidebar/>
                <Content>
                    <Outlet />
                </Content>
            </MainSection>
        </MainContainer>
    )
}

export default Layout
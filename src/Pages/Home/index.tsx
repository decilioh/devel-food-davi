import styled from "styled-components"

import { useContext, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import HeaderMain from "../../components/layout/Header";
import Loader from "../../components/common/Loader";
import Button from "../../components/common/Button";
import Modal from "../../components/common/Modal";
import { ModalContext } from "../../context/modalContext";


const Home = () => {
    const theme = useContext(ThemeContext)
    const modalContext = useContext(ModalContext)



    return (
        <>
            <HeaderMain />
            {/* <Loader theme={theme}/> */}
            <Button id="button-modal" onClick={modalContext?.openModal}>Modal</Button>
            <Modal />
        </>
    )
}

export default Home
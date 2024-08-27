import styled from "styled-components"

import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import HeaderMain from "../../components/layout/Header";
import Loader from "../../components/common/Loader";


const Home = () => {
    const theme = useContext(ThemeContext)
    return (
        <>
            <HeaderMain />
            {/* <Loader theme={theme}/> */}
        </>
    )
}

export default Home
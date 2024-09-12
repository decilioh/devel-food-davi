import styled from "styled-components";

export const HeaderHome = styled.header`
    width: 100%;
    height: 84px;
    background-color: ${({ theme }) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media screen and (max-width: 650px) {
        padding: 0 1rem;
    }
`;

export const ImageLogoHeader = styled.img`
    width: 155.2px;
`;

export const MenuButton = styled.button`
    background: none;
    border: none;
    color: ${({theme}) => theme.sidebar};
    font-size: 2rem;
    cursor: pointer;
    display: none;

    @media screen and (max-width: 650px) {
        display: block;
        position: absolute;
        left: 0.625rem;
    }
`;

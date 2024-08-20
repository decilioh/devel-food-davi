import styled from "styled-components";

export const ButtonApp = styled.button`
    width: 20vw;
    height: 77px;
    background: ${({ theme }) => theme.primary};
    color: ${({theme}) => theme.buttonText};
    border-radius: 17px;
    border: none;
    cursor: pointer;
    
    /* Text button */
    font-size: 36px;
    font-family: Roboto Condensed;
    font-weight: 500;
    text-align: center;

    margin: 2vh auto;

    @media screen and (max-width: 1024px) {
        width: 30vw;
    }

    @media screen and (max-width: 780px) {
        width: 40vw;
    }

    @media screen and (max-width: 610px) {
       width: 70vw;
    }
`
import styled from "styled-components";

export const ButtonApp = styled.button`
    max-width: 450px;
    width: 100%;
    height: 62px;
    background: ${({ theme }) => theme.primary};
    color: ${({theme}) => theme.buttonText};
    border-radius: 10px;
    border: none;
    cursor: pointer;
    
    /* Text button */
    font-size: 32px;
    font-family: Roboto Condensed;
    font-weight: 500;
    text-align: center;


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
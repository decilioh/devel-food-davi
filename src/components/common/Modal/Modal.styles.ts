import styled from "styled-components"

export const Overlay = styled.div`
    position: fixed; /* Sit on top of the page content */
    display: block; /* Hidden by default */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5); /* Black background with opacity */
    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
`

export const Centralize = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    @media screen and (max-width: 780px){
        padding: 0 2vw;
    }
`

export const ModalDialog = styled.div`
    max-width: 728px;
    width: 100%;
    max-height: 377px;
    height: 100%; 
    background-color: white;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    
`

export const Paragraph = styled.p`
    /* Você tem certeza que deseja realizar esta ação? */
    max-width: 602px;
    width: 100%;
    margin-top: 72px;


    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 300;
    font-size: 2.5rem;
    text-align: center;
    color: #031626;
`

export const SpacingContents = styled.div`
    max-width: 728px;
    width: 100%;
    max-height: 377px;
    height: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
`

export const ButtonAction = styled.button`
    max-width: 248px;
    max-height: 73px;
    width: 100%;
    height: 100%;
    border-radius: 0.625rem;
    outline: none;
    border: none;
    color: white;
    font-family: Roboto condensed;
    font-size: 42px;
    cursor: pointer;
`

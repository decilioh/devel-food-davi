import styled from "styled-components";

export const MainContainer = styled.section`
    padding: 20px;
    margin: auto;
    h2 {
        text-align: center;
        font-size: 3rem;
        font-family: Roboto;
        margin-bottom: 108px; 
    } 
    overflow-y: auto;

    @media (max-width: 768px) {
        margin: auto;
        width: 100%;
        padding: 10px;
        h2 {
            font-size: 2rem;
            margin-bottom: 50px;
        }
    }

    @media (max-width: 480px) {
        h2 {
            font-size: 1.5rem;
        }
    }
`;
export const TableContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 20px;
    justify-items: center; 
    width: 100%; 
    min-height: 32vw;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;


export const TableColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 10px; 
    max-width: 362.25px;
    width: 100%;
    align-items: center;
    overflow-y: auto;

    border-right: 2px solid #ccc; 
    &:first-child {
        border-left: 2px solid #ccc;
    }

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

export const ColumnTitle = styled.h3`
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.5rem;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;


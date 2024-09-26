import styled from "styled-components";

export const MainContainer = styled.section`
    padding: 20px;
    h2 {
        text-align: center;
        font-size: 3rem;
        font-family: Roboto;
        margin-bottom: 80px; 
        margin-top: 56px;
        font-weight: 500;
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
    display: flex;
    gap: 20px;
    margin-top: 20px;
    width: 100%;
    min-height: 32vw;
    

    @media (max-width: 1024px) {
        flex-wrap: wrap;
        gap: 10px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TableColumn = styled.div<{ isFirst?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 1rem 10px;
    max-width: 362.25px;
    width: 100%;
    align-items: center;
    overflow-y: auto;
    min-height: 32vw;

    ${({ isFirst }) => isFirst && `border-left: 2px solid #ccc;`} 
    border-right: 2px solid #ccc;

    @media (max-width: 1024px) {
        max-width: 100%;
        border-left: none;
        border-right: none;
        ${({ isFirst }) => isFirst && `border-left: none;`} 
    }

    @media (max-width: 768px) {
        max-width: 100%;
    }

    @media (max-width: 480px) {
        padding: 0 5px;
    }
`;

export const ColumnTitle = styled.h3`
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: 1.25rem;
    color: #625858;
    margin-bottom: 67px;
`
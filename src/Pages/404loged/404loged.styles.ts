import styled from "styled-components"


export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    margin-right: 12rem;
`

export const LogoContainer = styled.div`
    margin: 0;
    font-size: 14.38rem;
    height: 213px;
    color: ${({theme}) => theme.primary}
`

export const MessageError = styled.div`
    width:100%;
    max-width:472px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin-bottom:3.63rem;
    span{
        font-size:8rem;
        line-height:9.38rem;
        font-weight:700;
        color:${({ theme }) => theme.primary}
    }
    p{
        font-size:1.5rem;
        text-align:center;
        margin-top:-0.5rem;
    }
`
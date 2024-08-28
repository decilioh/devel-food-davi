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
    font-size: 230px;
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
    margin-bottom:58px;
    span{
        font-size:128px;
        line-height:150px;
        font-weight:700;
        color:${({ theme }) => theme.primary}
    }
    p{
        font-size:1.5rem;
        text-align:center;
        margin-top:-8px;
    }
`
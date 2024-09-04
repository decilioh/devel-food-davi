import styled from "styled-components"

export const MainContainer = styled.main`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:100vh;
    padding:1rem;
    button{
        width:100%;
        max-width:361px;
        height:100%;
        max-height:73px;
        a{
            color:${({ theme }) => theme.text}
        }
    }
`

export const ImageLogo = styled.img`
    width: auto;
`


export const LogoContainer = styled.div`
    margin-bottom:4.31rem;
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
        line-height:150px;
        font-weight:700;
        color:${({ theme }) => theme.primary}
    }
    p{
        font-size:1.5rem;
        text-align:center;
        margin-top:-0.5rem;
    }
`
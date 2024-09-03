import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  @media screen and (max-width: 1025px){
    overflow-y: auto;
  }
  @media screen and (max-height: 765px){
    overflow-y: auto;
    overflow-x: hidden;

  }
  
`;

export const MainSection = styled.div`
  display: flex;
  flex: 1;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.background};
  overflow-y: hidden;
  max-height: 1080px;
  overflow-x: hidden;

  margin: auto;
  @media screen and (max-width: 1025px){
    overflow-y: auto;
    margin: auto 0 auto auto;
  }
  
`;
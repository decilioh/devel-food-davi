import styled from "styled-components";

interface ContainerProps {
  isOpen: boolean;
  isMobile: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${({theme}) => theme.primary};
  max-width: ${({ isOpen }) => (isOpen ? '270px' : '60px')};
  width: 100%;
  transition: all 0.4s ease;
  display: ${({ isMobile }) => (isMobile ? 'none' : 'flex')};
  flex-direction: column;
  padding: 0.625rem 0;

  @media screen and (max-width: 650px) {
    left: ${({ isOpen }) => (isOpen ? '0' : '-60px')};
    width: ${({ isOpen }) => (isOpen ? '60px' : '0')};
    display: flex;
  }
`;

export const ToggleSidebarButton = styled.button`
  background: none;
  border: none;
  color: ${({theme}) => theme.sidebar};
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
  cursor: pointer;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.13rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  padding: 0.625rem 1.25rem;
  font-size: 1.2rem;
  cursor: pointer;
  color: ${({theme}) => theme.sidebar};
  border-radius:0.875rem 0px 0px 0.875rem;

  &:hover {
    background-color: ${({theme}) => theme.sidebar};
    color: ${({theme}) => theme.primary};
    transform: translateY(-2px);
  }

  span {
    margin-left: 1.25rem;
    white-space: nowrap;
  }
`;

interface LineDivisorProps {
  isOpen: boolean;
}

export const LineDivisor = styled.div<LineDivisorProps>`
    display:flex;
    justify-content:center;
    width:100%;
    height:1px;
    margin-bottom: 0.5rem;
    hr{
        width:${({ isOpen }) => (isOpen ? '80%' : '40%')};
        height:1px;
        margin-left:0.75rem;
        border: 1px solid black;
        opacity:20%;
    }
`;

export const TitleOpen = styled.span`
    width: 90%;
    display: flex;
    justify-content: space-between;
    font-family: Roboto Condensed;
    font-size:1.7rem;
    font-weight:400;
    letter-spacing:0.1rem;
    margin: 0 0.625rem 0 0.625rem;
    padding: 9px 0;
`;

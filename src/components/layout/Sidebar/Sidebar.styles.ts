import styled from "styled-components";

interface ContainerProps {
  isOpen: boolean;
  isMobile: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${({theme}) => theme.primary};
  width: ${({ isOpen }) => (isOpen ? '270px' : '60px')};
  transition: all 0.4s ease;
  display: ${({ isMobile }) => (isMobile ? 'none' : 'flex')};
  flex-direction: column;
  padding: 10px 0;

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
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  color: ${({theme}) => theme.sidebar};
  border-radius:14px 0px 0px 14px;

  &:hover {
    background-color: ${({theme}) => theme.sidebar};
    color: ${({theme}) => theme.primary};
    transform: translateY(-2px);
  }

  span {
    margin-left: 20px;
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
    margin-bottom: 8px;
    hr{
        width:${({ isOpen }) => (isOpen ? '80%' : '40%')};
        height:1px;
        margin-left:12px;
        border: 1px solid black;
        opacity:20%;
    }
`;

export const TitleOpen = styled.span`
    width: 90%;
    display: flex;
    justify-content: space-between;
    font-family: Roboto Condensed;
    margin: 0 10px 0 10px;
    padding: 9px 0;
`;

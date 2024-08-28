import styled from "styled-components";

export const Container = styled.div<{isOpen: boolean}>`
  background-color: ${({theme}) => theme.primary};
  width: ${({ isOpen }) => (isOpen ? '270px' : '60px')};
  transition: width 0.4s;
  display: flex;
  flex-direction: column;
  padding: 10px 0;

`;

export const ToggleSidebarButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  margin: 0 10px;
  cursor: pointer;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  color: ${({theme}) => theme.sidebar};

  &:hover {
    background-color: ${({theme}) => theme.sidebar};
    color: ${({theme}) => theme.primary};
    transform: translateY(-2px);
    border-radius:14px 0px 0px 14px;
  }

  span {
    margin-left: 10px;
    white-space: nowrap;
  }

`;

export const TitleOpen = styled.span`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 11px;

    border-bottom: 1px solid black;
`
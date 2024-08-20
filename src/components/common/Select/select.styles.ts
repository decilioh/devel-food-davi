import styled from "styled-components";

export const SelectWrapper = styled.div<{ isValid?: boolean; isTouched?: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid
    ${({ isValid, isTouched }) => {
      if (!isTouched) return '#ccc';
      return isValid ? '#00BFFF' : '#FF6347';
    }};
  background-color: white;
  border-radius: 4px;
  padding: 8px 12px;
  height: 38px; 
  cursor: pointer;
  color: #A2A2A2;
  
  font-family: inherit;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &:hover {
    border-color: #999;
  }

  svg{
    color: #A2A2A2;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 20vw;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000; 
`;

export const DropdownItem = styled.div`
  padding: 8px 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    background-color: #f1f1f1;
  }

  input {
    margin-right: 8px;
  }
`;

export const IconWrapper = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.error};
  font-size: 12px;
  margin-top: -12px;
  display: flex;
  justify-content: space-between;
`;

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
  color: #757575;
  font-family: Roboto;
  font-size: 13px;

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
    margin-right: 12px;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  height: 17vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 24.8vw;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000; 
  
  @media screen and (max-width: 1024px) {
        width: 30vw;
    }

    @media screen and (max-width: 780px) {
        width: 40vw;
    }

    @media screen and (max-width: 610px) {
       width: 77vw;
    }

  &::-webkit-scrollbar {
        width: 5px;
        height: 2px;
    }
    &::-webkit-scrollbar-thumb {
        background-color:#3F3D3D;
        border-radius: 4px;
        height: 2px;
    }
    &::-webkit-scrollbar-track {
        background-color: #F1F1F1;
    }
`;

export const DropdownItem = styled.div`
  padding: 4px 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: roboto condensed;
  font-size: 16px;
  color: #A2A2A2;
  
  
  
  &:hover {
    background-color: #f1f1f1;
  }

  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    background-color: #eee;
    border: 1px solid #ccc;
    width: 16px;
    height: 16px;
    border-radius: 3px;
    margin-right: 8px;
    cursor: pointer;
    
    &:checked {
      background-color: red;
      border-color: none;
    }

    &:checked::before {
      content: 'v'; /* código unicode para um check */
      display: block;
      text-align: center;
      color: white;
      font-size: 12px;
    }
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
  margin-top: 2px;
  display: flex;
  justify-content: space-between;
`;

export const ErrorAsterisk = styled.div`
  color: ${({ theme }) => theme.error};
  font-size: 12px;
  text-align: right;
  margin-top: -12px;
  
`
import styled from 'styled-components';

export const PasswordInputWrapper = styled.div<{ isValid?: boolean; isTouched?: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid
    ${({ isValid, isTouched }) => {
      if (!isTouched) return '#ccc'; // Cor inicial cinza
      return isValid ? '#00BFFF' : '#FF6347';
    }};
  background-color: white;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 16px;
`;


export const PasswordField = styled.input`
  border: none;
  outline: none;
  flex: 1;
  padding: 8px;
  width: 558px;
  color: #A2A2A2;

`;

export const IconWrapper = styled.div`
  color: #A2A2A2;
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const ToggleButton = styled.button`
  color: #A2A2A2;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.error};
  font-size: 12px;
  position: absolute;
  transform: translateY(-2vh);
`;

export const ErrorAsterisk = styled.div`
  color: ${({ theme }) => theme.error};
  font-size: 12px;
  text-align: right;
  margin-top: -12px;
  
`
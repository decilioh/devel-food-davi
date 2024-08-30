import styled from 'styled-components';

export const PasswordInputWrapper = styled.div<{ isValid?: boolean; isTouched?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${({ isValid, isTouched }) => {
    if (!isTouched) return '#dddddd'; // Cor inicial cinza
    return isValid ? '#07D9D9' : '#FF6347';
  }};
  background-color: white;
  border-radius: 8px;
  height: 56px;
  padding: 0 8px;
  margin-bottom: 8px;
`;


export const PasswordField = styled.input`
    border: none;
    outline: none;
    flex: 1;
    padding: 8px;
    width: 558px;
    color: #525252;
    letter-spacing: 0.05rem;
    font-size: 1.13rem;
    &::placeholder{
      color: #A2A2A2;
      letter-spacing: 0.05rem;
    }
`;

export const IconWrapper = styled.div`
  color: #A2A2A2;
  margin-right: 8px;
  margin-left:10px;
  display: flex;
  align-items: center;
  font-size: 22px;
`;

export const ToggleButton = styled.button`
  color: #A2A2A2;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  .iconEye{
      font-size: 22px;
    }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.error};
  font-size: 12px;
  margin-top: -6px;
  display: flex;
  justify-content: space-between;
`;

export const ErrorAsterisk = styled.div`
  color: ${({ theme }) => theme.error};
  font-size: 12px;
  text-align: right;
  margin-top: -12px;
  
`
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
  border-radius: 0.5rem;
  height: 3.5rem;
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;
`;


export const PasswordField = styled.input`
    border: none;
    outline: none;
    flex: 1;
    padding: 0.5rem;
    width: 550.5rem;
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
  margin-right: 0.5rem;
  margin-left:0.625rem;
  display: flex;
  align-items: center;
  font-size: 1.38rem;
`;

export const ToggleButton = styled.button`
  color: #A2A2A2;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  .iconEye{
      font-size: 1.38rem;
    }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.error};
  font-size: 0.75rem;
  margin-top: -0.375rem;
  display: flex;
  justify-content: space-between;
`;

export const ErrorAsterisk = styled.div`
  color: ${({ theme }) => theme.error};
  font-size: 0.75rem;
  text-align: right;
  margin-top: -0.75rem;
  
`